import { motion } from "framer-motion";



export default function Step1() {
    const transition = {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
    };

    const stepCariant = {
        initial: { x: 200, opacity: 1, transition },
        animate: { x: 0, opacity: 1, transition },
        exit: { x: -200, opacity: 1, transition: transition }
    };

    const typesEntretien = [
        {
            id: 1,
            nom: "périodique",
            description: "Entretien régulier recommandé par le fabricant à des intervalles spécifiques.",
            duree_estimee: "2 heures",
            cout_estime: 100
        },
        {
            id: 2,
            nom: "Réparation",
            description: "Réparation de problèmes mécaniques spécifiques.",
            duree_estimee: "4 heures",
            cout_estime: 200
        },
        {
            id: 3,
            nom: "Diagnostic",
            description: "Vérification des systèmes électroniques et identification des problèmes.",
            duree_estimee: "1 heure",
            cout_estime: 50
        },
        {
            id: 4,
            nom: "Changement",
            description: "Remplacement de l'huile moteur et du filtre à huile.",
            duree_estimee: "0.5 heure",
            cout_estime: 30
        }
    ]

    const agencesEntretienMaroc = [
        {
            id: 1,
            nom: "Agence AutoCare Rabat",
            ville: "Rabat",
            adresse: "Avenue Hassan II, Rabat",
            telephone: "+212 6 12 34 56 78",
            responsable: "Ahmed Benali"
        },
        {
            id: 2,
            nom: "Garage Mécanique Casablanca",
            ville: "Casablanca",
            adresse: "Boulevard Mohamed V, Casablanca",
            telephone: "+212 6 22 33 44 55",
            responsable: "Fatima El Amrani"
        },
        {
            id: 3,
            nom: "Service Auto Marrakech",
            ville: "Marrakech",
            adresse: "Avenue Mohammed VI, Marrakech",
            telephone: "+212 6 99 88 77 66",
            responsable: "Karim Chaoui"
        },
    ];

    return (
        <motion.div variants={stepCariant} initial="initial" animate="animate" exit="exit" className="w-full h-full  flex flex-col  items-start gap-6 justify-start">

            <h3 className="text-2xl font-bold  dark:text-gray-300">Type d'entretien</h3>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
                {typesEntretien.map((typeEntretien) => (
                    <label key={typeEntretien.id} className="max-w-[250px] card relative  min-w-[200px] ">
                        <input className="card__input" type="checkbox" />
                        <div className="card__body relative active:scale-95 rounded-md">
                            <div className="card__body-cover z-20  overflow-hidden">
                                <span className="card__body-cover-checkbox">
                                    <svg className="card__body-cover-checkbox--svg">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg>
                                </span>
                            </div>
                            <div className="absolute w-full h-full z-10 rounded-md bg-white  dark:bg-dark-bg-main dark:border-[1px] border-gray-700 py-4 px-2">
                                <h3 className="text-2xl font-bold text-center dark:text-gray-300">{typeEntretien.nom}</h3>
                                <p className="text-center mt-4 dark:text-gray-400">{typeEntretien.description}</p>


                            </div>
                        </div>
                    </label>))}
            </div>
            <h3 className="text-2xl font-bold  dark:text-gray-300">Agence d'entretien</h3>
            {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
                {agencesEntretienMaroc.map((agence) => (
                    <label key={agence.id} className=" card relative h-fit  min-w-[200px] ">
                        <input className="card__input" type="checkbox" />
                        <div className="card__body relative  active:scale-95 rounded-md">
                            <div className="card__body-cover z-20  overflow-hidden">
                                <span className="card__body-cover-checkbox">
                                    <svg className="card__body-cover-checkbox--svg">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg>
                                </span>
                            </div>
                            <div className="absolute w-full h-full  z-10 rounded-md bg-white  dark:bg-dark-bg-main dark:border-[1px] border-gray-700 py-4 px-2">
                                <p className="text-center mt-4 dark:text-gray-400">{agence.ville}</p>
                            </div>
                        </div>
                    </label>
                ))}
            </div> */}



        </motion.div>
    )
}