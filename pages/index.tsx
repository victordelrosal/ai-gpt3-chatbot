import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">🤖 robo-ta</Text>
        <Text className="text-zinc-600">
          robo teaching assistant (robo-ta) is an ai-generated member of faculty to help lecturers focus on the human side of lecturing.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <Text variant="h2">robo-ta says:</Text>
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
