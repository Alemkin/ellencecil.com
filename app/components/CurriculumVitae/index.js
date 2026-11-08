import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const education = [
  {
    degree: 'Ph.D., Rhetoric and Composition',
    institution: 'Florida State University',
    date: 'Spring 2020',
    project: 'Dissertation: Including Disability in Collaborative Writing Pedagogy'
  },
  {
    degree: 'M.A., Rhetoric and Composition',
    institution: 'Miami University',
    date: 'Summer 2015',
    project: 'Thesis: Approaches for Collaboration: Student Perceptions on Writing Together'
  },
  {
    degree: 'B.A., English Literature',
    institution: 'University of Central Florida',
    date: 'Summer 2013'
  }
]

const sections = [
  {
    title: 'Publications & Scholarship in Progress',
    entries: [
      'Cecil-Lemkin, Ellen and Lisa Marvel Johnson. “Centering the Human: A Tutor Training Approach to AI-Generated Writing Technology.” Writing Centers and AI: Generating Early Conversations, edited by Elisabeth Buck and Josh Botvin, WAC Clearinghouse, 2026.',
      'Cecil-Lemkin, Ellen. “Inviting Disability into the TPC Classroom through Service Learning.” Designing for Social Justice: Community-engaged Approaches in Technical and Professional Communication, edited by Jialei Jiang and Jason Tham, Routledge, 2025, pp. 278-91. (Invited)',
      'Conrad, Jennifer and Ellen Cecil-Lemkin. “Reuniting in the Write Place: Rediscovering Community at the IWCA Collaborative.” Another Word, 27 Feb. 2024, https://dept.writing.wisc.edu/blog/reuniting-iwca-collaborative/. (Non-peer reviewed)',
      'Cecil-Lemkin, Ellen and Tamara Gluck. “Navigating Your Collaborative Project.” Writing Spaces, edited by Dana Driscoll, Mary Stewart, and Matt Vetter, Parlor P, vol. 5, 2023, pp. 352-71.',
      'Cecil-Lemkin, Ellen. “Expanding Access in Collaborative Writing Pedagogy.” Teaching English in the Two-Year College, vol. 49, no. 3, 2022, pp. 202-18.',
      'Enoch, Jennifer, Megan Keaton, Ellen Cecil-Lemkin, and Travis Maynard. “Archival Internships as Techne: Teaching the Archive through the Museum of Everyday Writing’s Undergraduate Internship.” Teaching through the Archives: Text, Collaboration, and Activism, edited by Tarez Samra Graban and Wendy Hayden, Southern Illinois U P, 2022, pp. 107-20.',
      'Cecil-Lemkin, Ellen and Lisa Marvel Johnson. “Developing a Multimodal Toolkit for Greater Writing Center Accessibility.” Another Word, 20 Apr. 2021, https://dept.writing.wisc.edu/blog/multimodaltoolkit/. (Non-peer reviewed)',
      'Anglesey, Leslie and Ellen Cecil-Lemkin. “The Importance of Keeping Conference Quiet Rooms Quiet.” College Composition and Communication, vol. 72, no. 1, 2020, pp. 99-102. (Invited)',
      'Cecil, Ellen. “Review of Literature for ‘What Interests Students in Recreational Reading?’” Stylus: A Journal of First Year Writing, vol. 1, no. 2, 2010, pp. 10-12. (Non-peer reviewed)',
      'Cecil-Lemkin, Ellen. “Navigating Access as a Disabled Graduate Student with an Emotional Support Animal.” Radical Transparency: Perspectives on Graduate Education in Rhetoric and Composition, edited by Justin Cook and Skye Roberson, Utah State U P. (Under contract)',
      'Cecil-Lemkin, Ellen and Rachel Herzl-Betz. “Crip Collaboration: How Disabled Scholars Co-create Knowledge.” Still Writing Together: Perspectives on Collaborative Scholarship in Rhetoric and Composition, edited by Beth Leady, Erica Cirillo-McCarthy, Celeste Del Russo, and Amanda Fields. (Under contract)'
    ]
  },
  {
    title: 'Conference Participation',
    entries: [
      '“Crip Collaboration in Practice: How Disabled and Neurodivergent Scholars Write Together.” Conference on College Composition and Communication. Cleveland, OH. March 2026.',
      '“Disability SIG.” International Writing Centers Association. Baltimore, MD. October 2023.',
      '“Job Advertisements as Multi-Verse: Graduate Students and New Professionals Navigating Realities of the Writing Center Job Market.” International Writing Centers Association. Baltimore, MD. October 2023. (Workshop in partnership with IWCA-GO)',
      '“Creating Community through Collaborative Composing.” IWCA Collaborative at CCCC. Chicago, IL. February 2023.',
      '“Crip Classrooms: Academic Ableism and Foregrounding Disabled Perspectives.” Conference on College Composition and Communication. Online. March 2022.',
      '“Accessibility Centered: The Multimodal Toolkit from Theory to Praxis for Writing Center Tutor Training.” International Writing Centers Association. Online. October 2021. (Workshop)',
      '“Expanding Disability Access: Developing your Multimodal Toolkit for Tutoring Sessions.” Online Writing Centers Association. Online. October 2021. (Workshop)',
      '“Creating Accessible Collaborative Assignments for Neurodivergent Students.” Society for Disability Studies Conference. Online. April 2021.',
      '“Building Accessibility in Collaborative Writing Pedagogy.” Conference on College Composition and Communication. Online. April 2021.',
      '“Academic Ableism: Interrogating Common Tropes of Ability on Campus.” Conference on College Composition and Communication. Milwaukee, WI. March 2020. (Cancelled due to COVID-19)',
      '“Considering Collaboration through a Disability Perspective.” Feminisms and Rhetorics. Harrisonburg, VA. November 2019.',
      '“Writing Together: Students’ Perceptions on Collaboration.” Thomas R. Watson Conference. Louisville, KY. October 2018.',
      '“Have Dog, Will Tutor: An Autoethnographic Account of Tutoring with a Service Animal.” International Writing Center Association Annual Conference. Atlanta, GA. October 2018.',
      '“Human-Animal Entanglements: Reflections on Training a Service Animal.” Critical Disability Studies Student Association Conference. York University, Canada. April 2018.',
      '“Restrictions on Language for a Disabled Graduate Student.” Conference on College Composition and Communication. Kansas City, MO. March 2018.',
      '“Decoding [Academic] Systems: Writing Centers as Mentorship Sites.” International Writing Center Association Annual Conference. Chicago, IL. November 2017.',
      '“Invoking the Body: Touch and Making Meaning.” Feminisms and Rhetorics. Dayton, OH. October 2017.',
      '“Graduate Students Digitally Collaborating.” Computers and Writing. Findlay, OH. June 2017.',
      '“Madness in Academia: Stories and Sense-making from Neurodiverse Perspectives.” Disability Roundtable. Survive & Thrive. Online. April 2017.',
      '“Cultivating Collaboration and Distributing Power in Writing Program Administration.” Conference on College Composition and Communication. Portland, OR. March 2017.',
      '“Writing Communities Across Boundaries: Student Experiences with Digital Collaboration.” Computers and Writing. Rochester, NY. May 2016.',
      '“Digital Collaboration and Graduate Students.” Graduate Research Network. Rochester, NY. May 2016.',
      '“Pedagogy Roundtable.” EGSA Spring Conference. Tampa, FL. April 2016.',
      '“Building Collaborative Communities: Empowering Students through Community-Engaged Writing.” Conference on Community Writing. Boulder, CO. October 2015.',
      '“Creating Connections: Student Perceptions of Collaboration in First-Year Writing Classrooms.” Qualitative Research Network. Tampa, FL. March 2015.',
      '“Navigating Student Collaborative Spaces.” MEGAA Symposium. Oxford, OH. March 2015.',
      '“Climbing Up the Vine.” Computers and Writing. Pullman, Washington. June 2014.'
    ]
  },
  {
    title: 'Invited Lectures, Presentations, and Workshops',
    entries: [
      '“Accessibility at UW-Madison.” Literature Pedagogy Proseminar. Madison, WI. October 2026. Presentation.',
      '“Work with Your Brain: Developing Writing Strategies that Work for You.” UW-Madison’s Plant Science Graduate Student Council. Madison, WI. October 2026. Workshop.',
      '“Practicing Crip Collaboration: Disabled and Neurodivergent Approaches to Writing Together.” Writing Program Administrators-Graduate Organization (WPA-GO). Online. July 2026. Workshop. (Co-presented with Rachel Herzel-Betz and Sujash Purna)',
      '“Observing Growth, Supporting Change: A Writing Center View on Cultivating College Writers.” Greater Madison Writing Project’s High School to College Writing Symposium. Madison, WI. November 2025. Keynote. (Co-presented with Dr. Jennifer Conrad)',
      '“AI Writing and Disability.” Greater Madison Writing Project’s Teaching and Writing in the Age of ChatGPT Symposium. Madison, WI. July 2023. Presentation.',
      '“Disability and Accommodations in Higher Education.” UNIV 375: Third Year Seminar in Diversity, Equity, and Inclusion. Pfeiffer University. February 2023. Lecture.',
      '“Working in Higher Education with a Background in English and Disability Studies.” ENGL 333: Professional Experiences in English. Pfeiffer University. February 2022. Lecture.',
      '“Tutoring Disabled Students.” Reading-Writing Center Staff Meeting. Florida State University. April 2018. Workshop.',
      '“Working with Tutees with Disabilities.” LAE 5946: Teaching English as a Guided Study. Florida State University. July 2017. Lecture.',
      '“Collaborative Tools in Writing Classes: How to Make Digital Meaning Together.” Digital Writing Collaborative. Miami University. March 2015. Workshop.'
    ]
  },
  {
    title: 'Teaching Experience',
    groups: [
      {
        title: 'Assistant Teaching Professor',
        details: 'University of Wisconsin-Madison, English Department · Dec. 2024 – current',
        entries: [
          'ENGL 236: Writing for and about Disability, Spring 2026',
          'ENGL 795: Proseminar: Writing Center Theory and Practice, Fall 2026'
        ]
      },
      {
        title: 'Teaching Faculty II',
        details: 'Jan. 2021 – Dec. 2024',
        entries: [
          'ENGL 236: Writing for and about Disability, Fall 2023',
          'Proseminar: Writing Center Theory and Practice, Fall 2023, Spring 2024, & Fall 2024'
        ]
      },
      {
        title: 'Visiting Teaching Faculty',
        details: 'Florida State University, English Department · Aug. 2020 – Dec. 2020',
        entries: [
          'ENC 2135: Research, Genre, and Context (online, synchronous), Fall 2020',
          'ENC 3416: Writing and Editing for Print and Online (online, synchronous), Fall 2020'
        ]
      },
      {
        title: 'Graduate Instructor',
        details: 'Florida State University, English Department · Aug. 2015 – May 2020',
        entries: [
          'ENC 2135: Research, Genre, and Context, Fall 2015, Spring 2016, Summer 2016',
          'ENC 2135: Research, Genre, and Context (online, asynchronous), Fall 2019 & Spring 2020',
          'ENC 3416: Writing and Editing for Print and Online, Fall 2018, Spring 2019, Summer 2019, & Fall 2019',
          'ENC 3493: Peer Tutoring in the Reading Writing Center and Digital Studio, Fall 2017 & Spring 2018'
        ]
      },
      {
        title: 'Graduate Instructor',
        details: 'Miami University of Ohio, English Department · Aug. 2013 – May 2015',
        entries: [
          'ENG 111: Composition and Rhetoric, Fall 2013 & Fall 2014',
          'ENG 112: Composition and Literature, Spring 2014 & Spring 2015'
        ]
      }
    ]
  },
  {
    title: 'Administrative Experience',
    groups: [
      {
        title: 'Accessibility Coordinator',
        details: 'University of Wisconsin-Madison, Writing Center · Jan. 2021 – current',
        entries: [
          'Develop and lead accessibility initiatives to increase access for disabled tutors and writers.',
          'Oversee and support efforts in recruiting, interviewing, hiring, training, supervising, and evaluating tutors.',
          'Teach and design ongoing education courses for experienced writing tutors.',
          'Design assessments to evaluate tutor performance and anti-racist knowledge.',
          'Collaborate with colleagues to create, develop, and plan workshops, programs, and special events across campus.',
          'Edit, write, and solicit content for the Writing Center’s award-winning blog, Another Word.',
          'Planned, organized, and delivered a tailored program for the Dissertation Writing Camp in both in-person and online modalities, targeting the needs of advanced doctoral candidates (May 2021, May 2023, May 2024, Jan. 2025, May 2025).',
          'Coordinated and facilitated delivery of the Grant Writing Camp for doctoral students in the Social Sciences and Humanities (June 2026).',
          'Lead weekly writing groups for graduate students (Spring 2021, Fall 2021, Spring 2022, Fall 2022, Spring 2023, Fall 2023, Spring 2024, Spring 2026, Fall 2026).',
          'Wrote grant applications for community outreach and writing support (Fall 2022, Fall 2023).'
        ]
      },
      {
        title: 'Coordinator',
        details: 'Florida State University, Reading-Writing Center · Aug. 2017 – May 2019',
        entries: [
          'Managed schedules and daily operations for undergraduate and graduate tutors.',
          'Created and delivered presentations on writing for faculty across campus.',
          'Designed and distributed promotional material for print and online.',
          'Planned and organized bi-weekly staff development.'
        ]
      },
      {
        title: 'Rhetoric and Composition Program Assistant',
        details: 'Florida State University, Rhetoric and Composition Program · Aug. 2016 – Apr. 2017',
        entries: [
          'Planned visiting scholars’ visits, created promotional material, and assisted with event coordination.',
          'Coordinated all program-related events.',
          'Maintained and updated the program’s website.'
        ]
      },
      {
        title: 'Administrator',
        details: 'Florida State University, Museum of Everyday Writing · May 2016 – Dec. 2017',
        entries: [
          'Maintained communications across email, blog, and social media platforms.',
          'Recruited students to participate in the Museum internship.',
          'Oversaw undergraduate interns’ work and projects for the Museum.'
        ]
      },
      {
        title: 'Administrative Graduate Assistant',
        details: 'Miami University, Center for Civic Engagement · Jan. 2014 – Aug. 2014',
        entries: [
          'Developed material and trained 10 undergraduate Regional Fellows for the Study of the United States Institute for Student Leaders (SUSI).',
          'Assumed administrative, counseling, and programming responsibilities for 20 undergraduate international students and 10 Regional Fellows.'
        ]
      }
    ]
  },
  {
    title: 'Tutoring Experience',
    groups: [
      {
        title: 'Writing Tutor',
        details: 'Florida State University, Reading-Writing Center · Aug. 2016 – May 2019',
        entries: [
          'Tutored recurring and walk-in graduate and undergraduate students on successful writing and reading habits in both face-to-face and online settings.',
          'Worked with students on a variety of projects including dissertations, prospectuses, external funding applications, scholarly articles, and in-class projects.'
        ]
      },
      {
        title: 'Digital Pedagogy Consultant',
        details: 'Miami University of Ohio, Digital Writing Lab · Sept. 2014 – May 2015',
        entries: [
          'Conducted individual consultations and facilitated workshops with teachers to improve digital pedagogy.',
          'Developed curricular materials for graduate assistants and faculty members.'
        ]
      },
      {
        title: 'Mentor Writing Consultant',
        details: 'University of Central Florida, University Writing Center · Aug. 2012 – July 2013',
        entries: ['Mentored new consultants in writing tutoring practices.']
      },
      {
        title: 'Writing Consultant',
        details: 'University of Central Florida, University Writing Center · Aug. 2011 – July 2012',
        entries: ['Assisted students in understanding complex assignments and rhetorical strategies for writing.']
      }
    ]
  },
  {
    title: 'Service',
    entries: [
      'Diversity and Inclusion Committee Member, English Department, UW-Madison, Fall 2023, Fall 2026',
      'Mentor, Coalition of Feminist Scholars in the History of Rhetoric and Composition, Fall 2026',
      'Reviewer, Disability Studies Quarterly, Spring 2026',
      'Reviewer, Journal of Writing Assessment special issue on disability, neurodiversity, and writing assessment, Spring 2026',
      'Chair, CCCC Disability in College Composition Travel Awards Selection Committee, Fall 2023',
      'Reviewer, The Peer Review special issue on Enacting Linguistic Justice In/Through Writing Centers, Fall 2023',
      'Disability Task Force Member, International Writing Centers Association, March 2023 – May 2024',
      'Accessibility Committee Member, Online Writing Centers Association, Feb. 2021 – 2022',
      'Assistant Editor, Best of the Journals in Rhetoric and Composition 2021, Fall 2020',
      'Reviewer, Writing Spaces 4th edition, Fall 2020',
      'Accessibility Committee Member, Writing Program Administrators—Graduate Organization, Sept. 2019 – May 2020',
      'Ambassador, Office of Accessibility Services, Florida State University, Jan. 2019 – May 2020',
      'Diversity and Outreach Committee Member, Writing Program Administrators—Graduate Organization, Aug. 2018 – Aug. 2019',
      'Committee Member, Reading-Writing Center Committee, Florida State University, Aug. 2017 – Aug. 2018',
      'Volunteer, National Day on Writing, Florida State University, Oct. 2016, 2017, 2018',
      'Committee Member, College Composition Committee, Florida State University, Aug. 2016 – Dec. 2016',
      'Composition Committee Member, Miami English Graduate and Adjunct Association (MEGAA), Miami University, Aug. 2014 – May 2015'
    ]
  },
  {
    title: 'Awards',
    entries: [
      'McBurney Disability Resource Center’s Forward in Access, 2025',
      'Academic Staff Professional Development Grant, 2022',
      'FSU Student Star, Sept. 2019',
      'Spencer Foundation Award Recipient, 2019',
      'FSU Gates Fellowship, 2015—2019',
      'UCF Study Abroad Merit Scholarship, 2012',
      'UCF Student Government Association (SGA) Tutor Scholarship, 2012',
      'UCF SGA Campus Involvement Scholarship, 2012'
    ]
  },
  {
    title: 'Professional Development',
    groups: [
      {
        title: 'Academic Events Attended',
        entries: [
          'UW-Madison’s Teaching Academy Winter Retreat, Spring 2026',
          'Conference on College Composition and Communication, Spring 2025',
          'Big 10 Academic Alliance Writing Center Directors Meeting, Chicago, IL, Spring 2025',
          'UW-Madison Diversity Forum: Threads of Belonging: Navigating Differences and Building Community, Fall 2024',
          'UW-Madison Diversity Forum: Bridging the Divide: Realizing Belonging While Engaging Difference, Fall 2023',
          'Conference on College Composition and Communication, Spring 2023'
        ]
      },
      {
        title: 'Workshops Attended',
        entries: [
          'Ally and Online Course Accessibility Training, Florida State University, February 2020',
          'Writing Assessment Institute, Florida State University, Spring 2019',
          'Early Career Scholars with Disabilities, American Educational Research Association Conference, April 2019'
        ]
      }
    ]
  }
]

const renderEntry = entry =>
  entry.split(/(https?:\/\/[^\s]+)/g).map((part, index) => {
    if (!part.startsWith('http')) return <React.Fragment key={index}>{part}</React.Fragment>

    const url = part.replace(/[.,]+$/, '')
    const punctuation = part.slice(url.length)

    return <React.Fragment key={index}><a href={url} target='_blank' rel='noopener noreferrer'>{url}</a>{punctuation}</React.Fragment>
  })

const CurriculumVitae = () =>
  <Row className='curriculum-vitae mt-4 page-wrapper' tag='main'>
    <Col xl={{ size: 10, offset: 1 }}>
      <header className='cv-header mb-4'>
        <h1>{'Ellen Cecil-Lemkin'}</h1>
        <a href='tel:2399081688'>(239) 908-1688</a>
        {' | '}
        <a href='mailto:cecillemkin@wisc.edu'>cecillemkin@wisc.edu</a>
        {' | '}
        <a href='https://ellencecil.com' target='_blank' rel='noopener noreferrer'>ellencecil.com</a>
      </header>

      <section>
        <h2>{'Education'}</h2>
        <ul className='cv-entry-list'>
          {education.map(entry =>
            <li className='cv-education' key={entry.degree}>
              <strong>{entry.degree}</strong>
              <span>{entry.institution}{' · '}{entry.date}</span>
              {entry.project && <span className='cv-project'>{entry.project}</span>}
            </li>
          )}
        </ul>
      </section>

      {sections.map(section =>
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.groups
            ? section.groups.map((group, index) =>
              <div className='cv-group' key={`${group.title}-${index}`}>
                <h3>{group.title}</h3>
                {group.details && <p className='cv-group-details'>{group.details}</p>}
                <ul className='cv-entry-list'>
                  {group.entries.map((entry, entryIndex) =>
                    <li key={entryIndex}>{renderEntry(entry)}</li>
                  )}
                </ul>
              </div>
            )
            : <ul className='cv-entry-list'>
              {section.entries.map((entry, index) =>
                <li key={index}>{renderEntry(entry)}</li>
              )}
            </ul>}
        </section>
      )}
    </Col>
  </Row>

export default CurriculumVitae
