import { Flex, Button, Image, Text } from '@chakra-ui/react'
import styled from 'styled-components'
import { useState } from 'react'

const ImageControl = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  place-items: center;
  padding: 15px;
  width: 100%;
  height: 100%;
  z-index: 9;
  background-color: rgba(22, 22, 22, 0.9);

  .container {
    background-color: #222;
    box-shadow: 0 3px 10px #111;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 15px;
    cursor: pointer;
    border-radius: 4px;

    label {
      cursor: pointer;
      font-size: 0.9rem;

      input {
        display: none;
      }
    }
  }
`

export default function ImageUpload({ close }) {
  const [selectedImage, setSelectedImage] = useState(undefined)

  /**
   * ---------------------------------
   * Trata evento de mudança de imagem
   * ---------------------------------
   */
  const onChangeImage = e => {
    const imageURL = URL.createObjectURL(e.target.files[0])
    setSelectedImage(imageURL)
    console.log(imageURL)
  }

  /**
   * --------------------------
   * Renderiza a imagem enviada
   * --------------------------
   */
  const renderUploadedImage = () => {
    if (selectedImage) {
      return (
        <Image
          src={selectedImage}
          borderRadius={'5px'}
          alt={'imagem selecionada'}
        />
      )
    }
  }

  /**
   * ------------
   * Salva imagem
   * ------------
   */
  const saveImage = () => {
    console.log('uploading...')
  }

  return (
    <ImageControl>
      <Flex alignSelf={'flex-end'} cursor={'pointer'}>
        <Image src={'/img/white-times.svg'} alt={'fechar'} onClick={close} />
      </Flex>
      <Flex direction={'column'} className={'container'}>
        {!selectedImage && (
          <label>
            <Image src={'/img/image-placeholder.svg'} alt={'selecionar'} />
            <input type={'file'} accept={'image/*'} onChange={onChangeImage} />
            <Text fontSize={'1.3rem'}>Selecione a imagem</Text>
          </label>
        )}
        {selectedImage && (
          <Flex direction={'column'}>
            <Button
              colorScheme={'blackAlpha'}
              mb={5}
              onClick={() => setSelectedImage(false)}
            >
              Selecionar outra
            </Button>
            {renderUploadedImage()}
            <Button colorScheme={'orange'} mt={5} onClick={saveImage}>
              Confirmar
            </Button>
          </Flex>
        )}
      </Flex>
    </ImageControl>
  )
}
