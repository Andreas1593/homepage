import { Center } from '@chakra-ui/react'
import Image from 'next/image'

export const SliderLogo = ({ src, alt }) => (
  <Center h="120px" m={3}>
      <Image
          src={src}
          alt={alt}
          placeholder="blur"
      />
  </Center>
)