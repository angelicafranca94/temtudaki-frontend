import { Dialog, Paragraph, Portal, Provider, Button as PaperButton } from "react-native-paper"

const CustomDialog = (props) => {
    return (
        <Provider>
        <Portal>
        <Dialog visible={props.visible} onDismiss={() => props.onClose(false)}>
          <Dialog.Title>{props.titulo}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{props.mensagem}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <PaperButton onPress={() => props.onClose(false)}>OK</PaperButton>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      </Provider>
      
    )
}

export default CustomDialog