import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";

import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe asperiores error nulla qui ducimus.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe asperiores error nulla qui ducimus.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe asperiores error nulla qui ducimus.",
    }
];

const container = {
    hidden: {},
    visible: {
        transition: { StaggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* header */}
            <motion.div 
                className="md: my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <HText>MORE THAN JUST GYM.</HText>
            </motion.div>
            <p className="my-5 text-sm">
                We provide world class fintess equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into eacg and every member.
            </p>
            {/* benefits */}
            <motion.div 
                className="md: flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            {/* graphics and description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* graphic */}
                <img
                    className="mx-auto"
                    src={BenefitsPageGraphic} 
                    alt="benefits-page-graphic" 
                />
                {/* description */}
                <div>
                    {/* title */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 100 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* description */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio itaque aliquam dicta, hic dignissimos architecto ratione numquam, earum dolor sunt nostrum. Eveniet cum aliquid velit accusantium vel sit earum!
                            Non omnis facere dignissimos earum quibusdam minima voluptatem mollitia saepe? Voluptatum dicta impedit cum mollitia maxime dignissimos iste, odit neque laborum esse illo? Velit nobis voluptates totam dicta. Ipsum, debitis?
                        </p>
                        <p className="mb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ipsum maiores natus nemo similique nihil dignissimos. Labore, illum ex enim exercitationem sit dolores, porro dolorem dignissimos, molestias velit repudiandae asperiores.
                        </p>
                    </motion.div>
                    {/* button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
}

export default Benefits;