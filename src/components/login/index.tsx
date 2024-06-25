'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import z from 'zod'

import { Card } from '@/commons/card'
import { Link } from '@/commons/link'
import { Text } from '@/commons/text'
import { Title } from '@/commons/title'
import { View } from '@/commons/view'
import { Theme } from '@/configs/theme'
import { Button } from '@/forms/button'
import { FieldCheckbox } from '@/forms/field-checkbox'
import { FieldText } from '@/forms/field-text'

const SContent = styled.section`
  width: 400px;
  max-width: 90%;
  margin: 0 auto;
`
const SForm = styled.form``

const invalid_type_error = 'Ops! Invalid type provided for this field.'
const required_error = 'Ops! This field cannot be blank.'

const LoginSchema = z.object({
  identifier: z
    .string({ invalid_type_error, required_error })
    .min(1, { message: required_error }),
  password: z
    .string({ invalid_type_error, required_error })
    .min(6, { message: 'Ops! Password is too short' }),
  remember: z.optional(z.boolean())
})

export type LoginType = z.infer<typeof LoginSchema>

type LoginProps = {
  onSubmit: (_data: LoginType) => void
  defaultValue?: LoginType
  loading?: boolean
  forgotPassword?: string
}

export const Login = ({
  onSubmit,
  defaultValue,
  loading,
  forgotPassword = '/'
}: LoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid }
  } = useForm<LoginType>({
    mode: 'onTouched',
    resolver: zodResolver(LoginSchema),
    defaultValues: defaultValue
  })

  const disabledSubmitButton = !isDirty || !isValid || !loading

  function handleLogin(data: LoginType) {
    onSubmit(data)
  }

  return (
    <SContent>
      <Card>
        <SForm onSubmit={handleSubmit(handleLogin)}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: Theme.gap
            }}
          >
            <Title size="subtitle">_login</Title>
            <FieldText {...register('identifier')} error={errors?.identifier}>
              _username:
            </FieldText>
            <FieldText
              {...register('password')}
              type="password"
              error={errors?.password}
            >
              _password:
            </FieldText>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <FieldCheckbox {...register('remember')}>
                _remember me
              </FieldCheckbox>
              <Link href={forgotPassword}>
                <Text size="code" as="span">
                  _forgot password?
                </Text>
              </Link>
            </View>
            <View style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                disabled={disabledSubmitButton}
                type="submit"
                style={{ marginLeft: 'auto' }}
              >
                submit-login
              </Button>
            </View>
          </View>
        </SForm>
      </Card>
    </SContent>
  )
}
