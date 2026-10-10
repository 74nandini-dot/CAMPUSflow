
import { createContext, useState, useEffect } from 'react'

const initialPlacements = [
  {
    id: 1,
    company: 'TCS',
    role: 'Software Developer',
    package: '7 LPA',
    driveDate: '2026-10-15',
    eligibility: 'CGPA 6.5+',
    status: 'Open',
  },
  {
    id: 2,
    company: 'Accenture',
    role: 'Associate Software Engineer',
    package: '6.5 LPA',
    driveDate: '2026-10-18',
    eligibility: 'CGPA 6.0+',
    status: 'Open',
  },
]

export const PlacementContext = createContext()

export function PlacementProvider({ children }) {
  const [placements, setPlacements] = useState(() => {
    try {
      const savedPlacements = localStorage.getItem('placements')

      return savedPlacements
        ? JSON.parse(savedPlacements)
        : initialPlacements
    } catch (error) {
      console.error('Failed to load placements:', error)
      return initialPlacements
    }
  })

  useEffect(() => {
    localStorage.setItem('placements', JSON.stringify(placements))
  }, [placements])

  return (
    <PlacementContext.Provider value={{ placements, setPlacements }}>
      {children}
    </PlacementContext.Provider>
  )
}