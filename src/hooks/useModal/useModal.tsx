import {FC, useState} from "react";
import ModalPanel from "@/components/ui/modalPanel/ModalPanel";
import {useScrollLock} from "@/hooks/useScrollLock/useScrollLock";

type returnType = [
    VoidFunction, FC
]

export const useModal = (ModalContent: FC): returnType => {
    const [isOpened, setIsOpened] = useState(false)
    useScrollLock(isOpened)

    const openModal = () => {
        setIsOpened(true)
    }
    const closeModal = () => {
        setIsOpened(false)
    }

    const modal: FC = () => {
        return (
            isOpened
                ? (
                    <ModalPanel close={closeModal}>
                        <ModalContent/>
                    </ModalPanel>
                )
                :null
        )
    }
    return [openModal, modal]
}
