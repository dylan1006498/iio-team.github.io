export async function load() {

    let countries = [
        {
            name: "Italy",
            school: {
                url: "http://avbo.it/",
                name: "Istituti di Istruzione Superiore Aldini Valeriani"
            },
            iiot: "https://sites.google.com/aldini.istruzioneer.it/olimpiadi-informatica-squadre",
            email: "nadia.amaroli@avbo.it",
        },
        {
            name: "Romania",
            school: { 
                url: "http://cni.nt.edu.ro/new/",
                name: "Colegiul Național de Informatică"
            },
            iiot: "http://cni.nt.edu.ro/ioit/",
            email: "blagagabriela@yahoo.com",
        },
        {
            name: "Hungary",
            school: {
                url: "https://fazekas.hu/",
                name: "Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium"
            },
            iiot: "http://kodkupa.hu/",
            email: "laszlo.nikhazy@gmail.com",
        },
        {
            name: "Egypt",
            school: {
                url: "https://aast.edu/en/",
                name: "Arab Academy for Science and Technology Regional Informatics Center"
            },
            email: "eslam@aast.edu",
        },
        {
            name: "Syria",
            school: {
                url: "https://dca-net.org/",
                name: "Distinction and Creativity Agency"
            },
            iiot: "https://dca-net.org/",
            email: "ubai.sandouk@damascusuniversity.edu.sy",
        },
    ];

    return {countries};
};