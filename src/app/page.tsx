import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Polling Station</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Vote on Polls</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Participate in existing polls and make your voice heard on various topics.
            </p>
            <Button asChild className="w-full">
              <Link href="/polls">Browse Polls</Link>
            </Button>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Create a Poll</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Create your own poll and share it with others to gather opinions.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/polls/new">New Poll</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Create Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
