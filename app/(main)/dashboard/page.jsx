'use client'
import { useQuery } from 'convex/react'
import React from 'react'
import { api } from '@/convex/_generated/api'
import { useConvexQuery } from '@/hooks/useConvexHook'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { BarLoader } from 'react-spinners'
import { useState } from 'react'
import { NewProjectModal } from './_components/NewProjectModal'
import { ProjectGrid } from './_components/ProjectGrid'
import { Sparkles } from 'lucide-react'

const Dashboard = () => {
   const [showNewProjectModal, setShowNewProjectModal] = useState(false);
   const {data :projects,loading} =useConvexQuery(api.projects.getUserProjects)  
  return (
    <div className='min-h-12 pt-12 pb-16'>
      <div className='container mx-auto py-30  '>
        <div className='flex items-center mb-12 justify-between'>
            <div>
              <h1 className='text-4xl font-bold text-white mb-2 '>
                Your Projects
              </h1>
              <p>
                Create and manage your AI powered images and designs
              </p>
            </div>
            <Button size="lg" className=' bg-amber-300 gap-2 cursor-pointer' onClick={()=>setShowNewProjectModal(true)}>
              <Plus className='w-12 h-8' />
              New Project
            </Button>

        </div>
               {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
          </div>
        ) : projects && projects.length > 0 ? (
          <ProjectGrid projects={projects} />
        ) : (
          <EmptyState onCreateProject={() => setShowNewProjectModal(true)} />
        )}


          <NewProjectModal
          isOpen={showNewProjectModal}
          onClose={() => setShowNewProjectModal(false)}
        />

      </div>
    </div>
  )
}

export default Dashboard

// Empty state when user has no projects
function EmptyState({ onCreateProject }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
    
      <h3 className="text-2xl font-semibold text-white mb-3">
        Create Your First Project
      </h3>

      <p className="text-white/70 mb-8 max-w-md">
        Upload an image to start editing with our powerful AI tools, or create a
        blank canvas to design from scratch.
      </p>
    </div>
  );
}