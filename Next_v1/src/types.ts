export type userType = {
  id: string;
  nameKr: string;
  nameEn: string;
  affiliation: string;
  isAlumni: boolean;
  researchField: string;
  email: string;
  img: string;
  degree: string;
  company: string;
};

export type researchType = {
  id: string;
  title: string;
  contents: string;
  extraAddress: string;
  createdAt?: string;
  updatedAt?: string;
};

export type publicationType = {
  year: string;
  contents: string;
  author: string;
  publisher: string;
  publishedDate: string;
  createdAt?: string;
  updatedAt?: string;
};

export type noticeType = {
  id: string;
  title: string;
  contents: string;
  createdAt: string;
  updateAt?: string;
};

export type galleryType = {
  id: string;
  title: string;
  contents: string;
  videoUrl: string;
  imgUrls: string[];
  createdAt: string;
  updatedAt: string;
};
