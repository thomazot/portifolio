import { Link } from '@/commons/link'
import { Text } from '@/commons/text'
import { Title } from '@/commons/title'
import { View } from '@/commons/view'
import { Theme } from '@/configs/theme'

export default function Home() {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'auto',
        height: '100%'
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          minHeight: '50vh',
          padding: Theme.gap
        }}
      >
        <View>
          <Title size="body" as="h2">
            Hi all. I am
          </Title>
          <Title size="title" as="h1">
            Thomaz Toyama
          </Title>
          <Title color="secondary-three" size="subtitle" as="h3">
            &gt; Front-end developer
          </Title>
        </View>
        <View style={{ wordBreak: 'break-all' }}>
          <Text>{'// '}find my profile on Github:</Text>
          <Text>
            <Text as="span" color="secondary-three">
              {`const `}
            </Text>
            <Text as="span" color="accent-two">
              {'githubLink '}
            </Text>
            {'= '}
            <Link href="https://github.com/thomazot">
              <Text as="span" color="accent-three">
                “https://github.com/thomazot”
              </Text>
            </Link>
          </Text>
        </View>
      </View>
    </View>
  )
}
