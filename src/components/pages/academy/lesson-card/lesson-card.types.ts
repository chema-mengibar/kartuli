export interface LessonCardProps {
  id?: string;
  image:string;
  title: string;
  description: string;
  currentLessons: number;
  totalLessons: number;
  to?: object | string;
  color?: string;
  videoSource?: string;
  big?: boolean;
}
