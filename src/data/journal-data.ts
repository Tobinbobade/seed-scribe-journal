export interface Article {
  id: string;
  title: string;
  authors: string;
  abstract: string;
  pdfUrl: string;
  pages?: string;
}

export interface Issue {
  number: number;
  articles: Article[];
}

export interface Volume {
  number: number;
  year: number;
  issues: Issue[];
}

export interface EditorialMember {
  name: string;
  role: string;
  affiliation?: string;
}

// Sample articles data
export const sampleArticles: Article[] = [
  {
    id: "vol1-issue1-art1",
    title: "Seed Viability and Storage Conditions of Maize in Southwestern Nigeria",
    authors: "A. B. Adewale, C. D. Okafor",
    abstract: "This study evaluates the effects of different storage conditions on seed viability of maize varieties in Southwestern Nigeria. The research examined various temperature and humidity levels across multiple storage facilities and their impact on germination rates over a 12-month period. Results indicate that controlled temperature environments significantly improved seed longevity compared to traditional storage methods.",
    pdfUrl: "/placeholder.pdf",
    pages: "1-12"
  },
  {
    id: "vol1-issue1-art2",
    title: "Effect of Seed Treatment on Germination and Early Growth of Cowpea",
    authors: "E. F. Bello, G. H. Musa",
    abstract: "The research investigates the impact of seed treatment methods on germination and early seedling performance of cowpea. Various biological and chemical seed treatments were evaluated for their efficacy in promoting uniform germination and vigorous seedling establishment. The findings provide practical recommendations for farmers seeking to optimize cowpea production through improved seed management practices.",
    pdfUrl: "/placeholder.pdf",
    pages: "13-25"
  },
  {
    id: "vol1-issue1-art3",
    title: "Genetic Diversity Assessment of Local Rice Varieties in Northern Nigeria",
    authors: "I. J. Ogun, K. L. Adebayo, M. N. Ibrahim",
    abstract: "This paper presents a comprehensive assessment of genetic diversity among local rice varieties cultivated in Northern Nigeria. Using molecular markers and morphological characterization, the study documents the extent of variation within and between traditional rice landraces. The findings have implications for conservation strategies and breeding programs aimed at developing improved varieties.",
    pdfUrl: "/placeholder.pdf",
    pages: "26-38"
  }
];

// Journal volumes and issues
export const volumes: Volume[] = [
  {
    number: 1,
    year: 2024,
    issues: [
      {
        number: 1,
        articles: sampleArticles
      }
    ]
  },
  {
    number: 2,
    year: 2025,
    issues: [
      {
        number: 1,
        articles: [] // Placeholder for future issue
      }
    ]
  }
];

// Editorial board data
export const editorialBoard: EditorialMember[] = [
  {
    name: "Prof. A. B. Adewale",
    role: "Editor-in-Chief",
    affiliation: "University of Ibadan, Nigeria"
  },
  {
    name: "Dr. C. D. Okafor",
    role: "Associate Editor",
    affiliation: "Ahmadu Bello University, Zaria"
  },
  {
    name: "Dr. E. F. Bello",
    role: "Managing Editor",
    affiliation: "Federal University of Agriculture, Abeokuta"
  },
  {
    name: "Dr. G. H. Musa",
    role: "Editorial Board Member",
    affiliation: "Bayero University, Kano"
  },
  {
    name: "Prof. I. J. Ogun",
    role: "Editorial Board Member",
    affiliation: "University of Nigeria, Nsukka"
  },
  {
    name: "Dr. K. L. Adebayo",
    role: "Editorial Board Member",
    affiliation: "Obafemi Awolowo University, Ile-Ife"
  }
];

// Journal information
export const journalInfo = {
  title: "ASSN Journal of Seed Science and Technology",
  shortTitle: "ASSN Journal",
  publisher: "Association of Seed Scientists of Nigeria (ASSN)",
  issn: "XXXX-XXXX", // Placeholder
  email: "journal@assnigeria.org",
  address: "Association of Seed Scientists of Nigeria (ASSN), National Secretariat, Abuja, Nigeria"
};
