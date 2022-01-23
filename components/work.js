import NextLink from 'next/link'
import { Heading, Box, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import ModalImage from 'react-modal-image';

export const Title = ({ children }) => (
    <Box>
        <NextLink href="/works">
            <Link>Projekte</Link>
        </NextLink>
        <span>
            &nbsp;
            <ChevronRightIcon />
            &nbsp;
        </span>
        <Heading display='inline-block' as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const WorkImage = ({ thumb, image, alt }) => (
    <Box
        rounded="lg"
        overflow="hidden"
        maxW="full"
        maxH="full"
        mb={4}
    >
        <ModalImage
            small={thumb}
            large={image}
            alt={alt}
            hideDownload="true"
        />
    </Box>
)

export const WorkVideo = ({ embedId }) => (
    <div style={{
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: "relative",
        height: 0,
    }}>
    <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded Youtube"
        style={{
            left: 0,
            top: 0,
            height: "100%",
            width: "100%",
            position: "absolute",
            borderRadius: "8px"
        }}
    />
  </div>
)

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)