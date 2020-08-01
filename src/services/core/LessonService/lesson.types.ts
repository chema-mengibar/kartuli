
export interface LessonProps {
  component: any; //@issue
  block: string;
}

export interface CatalogItem {
  id: string
  component: any; //@issue ?? ReactNode
  trainer?: any; //@issue ?? ReactNode
  image: string;
  titleKey: string;
  descriptionKey: string;
  currentLessons: number;
  totalLessons: number;
  block: string;
  color: string;
  videoSource?: string;
}

export type Catalog = {
  [key:string]: CatalogItem
}

export type BlocksConfig = {
  [key:string]: {
    labelKey:string;
  }
}


export interface Block{
  labelKey: string;
  lessons: CatalogItem[];
}

export type Blocks  = Block[]