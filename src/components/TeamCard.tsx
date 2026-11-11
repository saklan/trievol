import React from "react";
import { Linkedin, Github, Mail, User } from "lucide-react";
import { TeamMember } from "../data/team";

interface TeamCardProps {
  key?: string | number;
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const isPlaceholder = member.image.startsWith("placeholder-");

  return (
    <div 
      id={`team-card-${member.name.toLowerCase().replace(/\s+/g, "-")}`}
      className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-slate-350 hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
    >
      {/* Photo Container */}
      <div className="h-64 w-full overflow-hidden relative bg-slate-900 flex items-center justify-center">
        {isPlaceholder ? (
          /* High-stature styled placeholder */
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex flex-col justify-between p-6">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">// Trievol Archive</span>
              <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-300">
                <User className="w-4 h-4" />
              </div>
            </div>
            
            <div className="text-center my-auto">
              <span className="text-4xl font-sans font-extrabold tracking-widest text-slate-700 select-none block leading-none">
                {member.initials}
              </span>
              <span className="text-[9px] font-mono text-blue-500/80 uppercase tracking-widest block mt-2">
                Engineering Resource
              </span>
            </div>

            <div className="text-center pt-2 border-t border-slate-800/60">
              <span className="text-[8px] font-mono text-slate-500 uppercase tracking-wider block">
                [ Photo Placeholder: {member.name} ]
              </span>
            </div>
          </div>
        ) : (
          /* Actual Team Image */
          <img 
            src={member.image} 
            alt={member.name} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-103"
          />
        )}
        
        {/* Soft elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
        <div className="space-y-2">
          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {member.name}
          </h3>
          <span className="text-xs font-mono font-bold text-blue-600 tracking-wide block uppercase">
            {member.role}
          </span>
          <p className="text-xs text-slate-500 leading-relaxed pt-1">
            {member.bio}
          </p>
        </div>

        {/* Social Action Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
            // Verified profile
          </span>
          
          <div className="flex items-center gap-2.5">
            {member.email && (
              <a 
                href={`mailto:${member.email}`}
                className="w-7.5 h-7.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all cursor-pointer"
                title={`Email ${member.name}`}
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            )}
            
            {member.linkedin && (
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7.5 h-7.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all cursor-pointer"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            )}
            
            {member.github && (
              <a 
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7.5 h-7.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300 transition-all cursor-pointer"
                title="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
