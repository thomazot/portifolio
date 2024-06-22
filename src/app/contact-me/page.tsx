import { View } from '@/commons/view'
import { FormContact } from '@/components/form-contact'
import { Note } from '@/components/note'

export default function ContactMe() {
  return (
    <Note title="contacts">
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: '1'
        }}
      >
        <FormContact />
      </View>
    </Note>
  )
}
