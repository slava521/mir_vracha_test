import {FC, PropsWithChildren, useState} from "react";
import ModalPanel from "@/components/ui/modalPanel/ModalPanel";

type returnType = [
    VoidFunction, FC<PropsWithChildren>
]

export const useModal = (): returnType => {
    const [isOpened, setIsOpened] = useState(false)

    const openModal = () => {
        setIsOpened(true)
    }
    const closeModal = () => {
        setIsOpened(false)
    }

    const modal: FC<PropsWithChildren> = ({children}) => {
        return (
            isOpened
                ? (
                    <ModalPanel close={closeModal}>
                        {children}
                    </ModalPanel>
                )
                :null
        )
    }
    return [openModal, modal]
}
