export type SchoolData = {
    name: string
    average_student_gpa: number
    diversity: {
        female_percentage: number
        male_percentage: number
        international_percentage: number
    }
    quality_score: number
}