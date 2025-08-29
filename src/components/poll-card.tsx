import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PollCardProps {
  id: string
  title: string
  description: string
  totalVotes: number
  endsAt: Date
}

export function PollCard({ id, title, description, totalVotes, endsAt }: PollCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        <div className="mt-4 text-sm text-gray-500">
          <p>{totalVotes} votes • Ends {new Date(endsAt).toLocaleDateString()}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/polls/${id}`}>View Poll</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
