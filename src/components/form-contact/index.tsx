'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import styled, { css } from 'styled-components'
import { z } from 'zod'

import { View } from '@/commons/view'
import { Theme } from '@/configs/theme'
import { media } from '@/helpers/device'

import { Note } from '../note'
import { Tabs } from '../tabs'
import { FormContactForm } from './form-contact-form'
import { FormContactText } from './form-contact-text'

const SContactText = styled(View)`
  display: none;
  ${media.lg(css`
    display: block;
  `)}
`

export const FormContactSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(30)
})

export type FormContactType = z.infer<typeof FormContactSchema>

const CONTACT_DATA_DEFAULT: FormContactType = {
  name: '',
  email: '',
  message: ''
}

export const FormContact = () => {
  const formMethods = useForm<FormContactType>({
    mode: 'onChange',
    resolver: zodResolver(FormContactSchema),
    defaultValues: CONTACT_DATA_DEFAULT
  })

  return (
    <Tabs title="contacts">
      <FormProvider {...formMethods}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            flex: '1',
            minHeight: '100%'
          }}
        >
          <View style={{ flex: '1' }}>
            <Note>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: '1'
                }}
              >
                <FormContactForm formMethods={formMethods} />
              </View>
            </Note>
          </View>
          <SContactText
            style={{
              flex: '0 1 50%',
              borderLeft: `solid 1px ${Theme.color.lines}`
            }}
          >
            <Note number>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: '1'
                }}
              >
                <FormContactText />
              </View>
            </Note>
          </SContactText>
        </View>
      </FormProvider>
    </Tabs>
  )
}
