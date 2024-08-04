import Modal from "./Modal";

export default function MyCV() {
    return (
        <Modal>
            <Modal.Header className="flex gap-3">
                <h2 className="text-center text-xl text-[#0f0]">Video Resume</h2>
            </Modal.Header>
            <Modal.Body className="flex items-center justify-center">
                <video className="w-[80%]" controls>
                    <source src="/resume-video.mp4" type="video/mp4"/>
                </video>    
            </Modal.Body>
        </Modal>
    )
}