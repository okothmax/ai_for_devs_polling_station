import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Mock data - replace with real data from your API
type PollOption = {
  id: string
  text: string
  votes: number
  percentage: number
}

type Poll = {
  id: string
  title: string
  description: string
  totalVotes: number
  endsAt: string
  options: PollOption[]
}

const mockPoll: Poll = {
  id: "1",
  title: "Favorite Programming Language 2025",
  description: "Which programming language do you enjoy using the most in 2025?",
  totalVotes: 1243,
  endsAt: "2025-12-31T23:59:59Z",
  options: [
    { id: "1", text: "TypeScript", votes: 543, percentage: 44 },
    { id: "2", text: "Python", votes: 321, percentage: 26 },
    { id: "3", text: "Rust", votes: 234, percentage: 19 },
    { id: "4", text: "Go", votes: 145, percentage: 12 },
  ]
}

export default function PollPage({ params }: { params: { id: string } }) {
  const poll = mockPoll // In a real app, fetch this data using the ID from params
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>{poll.title}</CardTitle>
            <p className="text-gray-600 dark:text-gray-300">{poll.description}</p>
            <div className="text-sm text-gray-500">
              {poll.totalVotes} votes • Ends {new Date(poll.endsAt).toLocaleDateString()}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              {poll.options.map((option) => (
                <div key={option.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{option.text}</span>
                    <span className="text-sm text-gray-500">{option.percentage}%</span>
                  </div>
                  <Progress value={option.percentage} className="h-2" />
                  <div className="text-xs text-gray-500">{option.votes} votes</div>
                </div>
              ))}
            </div>
            
            <div className="pt-4 border-t">
              <Button className="w-full">Share this poll</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
