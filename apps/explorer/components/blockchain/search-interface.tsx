'use client'

import { Button, Card, Input } from '@l1network/ui'
import { Search } from 'lucide-react'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { AiQueryInterface } from './ai-query-interface'
import { JsonDisplay } from './json-display'

interface BlockchainData {
  // Add specific blockchain data types here
  [key: string]: unknown
}

export const SearchInterface = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [accountData, setAccountData] = useState<BlockchainData | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      const response = await fetch(`/api/blockchain/${searchQuery}`)
      const data = await response.json()
      setAccountData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSearch} className="relative">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search by address, transaction hash, or block number..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto"
          >
            {isLoading ? 'Searching...' : 'Search'}
          </Button>
        </div>
      </form>

      {accountData && (
        <div className="space-y-8">
          <Card className="p-6 overflow-hidden">
            <h2 className="text-xl font-semibold mb-4">Account Data</h2>
            <JsonDisplay data={accountData} />
          </Card>

          <AiQueryInterface accountData={accountData} address={searchQuery} />
        </div>
      )}
    </div>
  )
}
