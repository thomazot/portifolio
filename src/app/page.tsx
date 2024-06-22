import { Link } from '@/commons/link'
import { Text } from '@/commons/text'
import { Title } from '@/commons/title'
import { View } from '@/commons/view'
import { Theme } from '@/configs/theme'

export default function Home() {
  return (
    <View
      $display="flex"
      $justifyContent="center"
      $alignItems="center"
      $height="100%"
      style={{ overflow: 'auto', maxHeight: '100%' }}
    >
      <View
        $display="flex"
        $flexDirection="column"
        $justifyContent="space-around"
        $height="50vh"
        style={{ padding: `${Theme.gap}px` }}
      >
        <View>
          <Title weight="normal" color="tertiary" size="h4">
            Hi all. I am
          </Title>
          <Title weight="normal" color="tertiary" size="h1">
            Thomaz Toyama
          </Title>
          <Title weight="normal" size="h4" color="success">
            &gt; Front-end developer
          </Title>
        </View>
        <View style={{ wordBreak: 'break-all' }}>
          <Text>{'// '}find my profile on Github:</Text>
          <Text>
            <Text as="span" color="informational">
              {`const `}
            </Text>
            <Text as="span" color="success">
              {'githubLink '}
            </Text>
            {'= '}
            <Link href="https://github.com/thomazot">
              <Text as="span" color="critical">
                “https://github.com/thomazot”
              </Text>
            </Link>
          </Text>
        </View>
      </View>
    </View>
  )
}
