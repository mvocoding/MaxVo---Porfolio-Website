import { personalDetails } from "./data";
import Modal from "./Modal";
import { useModal } from "./ModalContext";
import { TabItem } from "./model";
import Tab from "./Tab";
import { TagList } from "./Tag";

export default function AboutMe() {
    const { openModal } = useModal();

    const tabsList: TabItem[] = [
        {
            title: 'About Me',
            content:
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-center mb-5">
                        <video className="w-full md:w-[50%] max-h-[25rem] object-cover object-center" controls poster="/thumbnail.png">
                            <source src="/resume-video.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="text-sm leading-8 whitespace-pre-line">{personalDetails.aboutme}
                    </div>
                    <div className="mt-5 flex flex-col md:flex-row *:flex-1 justify-center gap-2">
                        <a href="Resume.pdf" download className="btn-primary">Download My Resume</a>
                        <button onClick={() => openModal('liveprojects')} className="btn-primary">Daily Coding Journey</button>
                    </div>
                </div>,
        },
        {
            title: 'Tech Stack',
            content:
                <div className="space-y-5 flex flex-col ">
                    <div>
                        <TagList className="grid grid-cols-3 sm:grid-cols-4 gap-5" type="image" tagsList={[
                            {
                                text: 'HTML',
                                image: 'images/html.svg'
                            },
                            {
                                text: 'CSS',
                                image: 'images/css.svg'
                            },
                            {
                                text: 'TAILWIND',
                                image: 'images/tailwind.svg'
                            },
                            {
                                text: 'JAVASCRIPT',
                                image: 'images/js.svg'
                            },
                            {
                                text: 'REACT',
                                image: 'images/react.svg'
                            },
                            {
                                text: 'ANGULAR',
                                image: 'images/angular.svg'
                            },
                            {
                                text: 'CSHARP',
                                image: 'images/csharp.svg'
                            },
                            {
                                text: 'PYTHON',
                                image: 'images/python.svg'
                            },
                            // {
                            //     text: 'AWS',
                            //     image: 'images/aws.svg'
                            // }
                        ]}></TagList>
                    </div>
                    <button
                        className=" btn-primary mt-5" onClick={() => openModal('sideprojects')}>See My Work</button>
                </div>,
        },
        {
            title: 'Hobbies',
            content: <div className="flex flex-col h-full">
                <div className="whitespace-pre-line leading-8">{personalDetails.hobbies}
                </div>
                <button
                    className="mt-5 btn-primary py-2" onClick={() => openModal('liveprojects')}>Daily Coding Journey</button>
            </div>
        },

    ];

    return (
        <Modal className="mx-auto sm:max-w-[85%]">
            <Modal.Header className="flex gap-3"></Modal.Header>
            <Modal.Body>
                <Tab tabsList={tabsList}></Tab>
            </Modal.Body>
        </Modal>
    )
}