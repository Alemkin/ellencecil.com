import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const CurriculumVitae = () =>
  <Row className='curriculum-vitae mt-4 page-wrapper' tag='main'>
    <Col xl={{ size: 10, offset: 1 }}>
      <header className='cv-header mb-4'>
        <h1>{'Curriculum Vitae'}</h1>
      </header>

      <section>
        <h2>{'Education'}</h2>
        <ul className='cv-entry-list'>
          <li className='cv-education'>
            <strong>Ph.D., Rhetoric and Composition</strong>
            <span>Florida State University &middot; Spring 2020</span>
            <span>Dissertation: <i>Including Disability in Collaborative Writing Pedagogy</i></span>
          </li>
          <li className='cv-education'>
            <strong>M.A., Rhetoric and Composition</strong>
            <span>Miami University &middot; Summer 2015</span>
            <span>Thesis: <i>Approaches for Collaboration: Student Perceptions on Writing Together</i></span>
          </li>
          <li className='cv-education'>
            <strong>B.A., English Literature</strong>
            <span>University of Central Florida &middot; Summer 2013</span>
          </li>
        </ul>
      </section>

      <section>
        <h2>Publications &amp; Scholarship in Progress</h2>
        <ul className='cv-entry-list'>
          <li>Cecil-Lemkin, Ellen and Lisa Marvel Johnson. “<em>Centering the Human: A Tutor Training Approach to AI-Generated Writing Technology.</em>” Writing Centers and AI: Generating Early Conversations, edited by Elisabeth Buck and Josh Botvin, WAC Clearinghouse, 2026.</li>
          <li>Cecil-Lemkin, Ellen. “<em>Inviting Disability into the TPC Classroom through Service Learning.</em>” Designing for Social Justice: Community-engaged Approaches in Technical and Professional Communication, edited by Jialei Jiang and Jason Tham, Routledge, 2025, pp. 278-91. (Invited)</li>
          <li>Conrad, Jennifer and Ellen Cecil-Lemkin. “<em>Reuniting in the Write Place: Rediscovering Community at the IWCA Collaborative.</em>” Another Word, 27 Feb. 2024, <a href='https://dept.writing.wisc.edu/blog/reuniting-iwca-collaborative/' target='_blank' rel='noopener noreferrer'>https://dept.writing.wisc.edu/blog/reuniting-iwca-collaborative/</a>. (Non-peer reviewed)</li>
          <li>Cecil-Lemkin, Ellen and Tamara Gluck. “<em>Navigating Your Collaborative Project.</em>” Writing Spaces, edited by Dana Driscoll, Mary Stewart, and Matt Vetter, Parlor P, vol. 5, 2023, pp. 352-71.</li>
          <li>Cecil-Lemkin, Ellen. “<em>Expanding Access in Collaborative Writing Pedagogy.</em>” Teaching English in the Two-Year College, vol. 49, no. 3, 2022, pp. 202-18.</li>
          <li>Enoch, Jennifer, Megan Keaton, Ellen Cecil-Lemkin, and Travis Maynard. “<em>Archival Internships as Techne: Teaching the Archive through the Museum of Everyday Writing’s Undergraduate Internship.</em>” Teaching through the Archives: Text, Collaboration, and Activism, edited by Tarez Samra Graban and Wendy Hayden, Southern Illinois U P, 2022, pp. 107-20.</li>
          <li>Cecil-Lemkin, Ellen and Lisa Marvel Johnson. “<em>Developing a Multimodal Toolkit for Greater Writing Center Accessibility.</em>” Another Word, 20 Apr. 2021, <a href='https://dept.writing.wisc.edu/blog/multimodaltoolkit/' target='_blank' rel='noopener noreferrer'>https://dept.writing.wisc.edu/blog/multimodaltoolkit/</a>. (Non-peer reviewed)</li>
          <li>Anglesey, Leslie and Ellen Cecil-Lemkin. “<em>The Importance of Keeping Conference Quiet Rooms Quiet.</em>” College Composition and Communication, vol. 72, no. 1, 2020, pp. 99-102. (Invited)</li>
          <li>Cecil, Ellen. “<em>Review of Literature for ‘What Interests Students in Recreational Reading?’</em>” Stylus: A Journal of First Year Writing, vol. 1, no. 2, 2010, pp. 10-12. (Non-peer reviewed)</li>
          <li>Cecil-Lemkin, Ellen. “<em>Navigating Access as a Disabled Graduate Student with an Emotional Support Animal.</em>” Radical Transparency: Perspectives on Graduate Education in Rhetoric and Composition, edited by Justin Cook and Skye Roberson, Utah State U P. (Under contract)</li>
          <li>Cecil-Lemkin, Ellen and Rachel Herzl-Betz. “<em>Crip Collaboration: How Disabled Scholars Co-create Knowledge.</em>” Still Writing Together: Perspectives on Collaborative Scholarship in Rhetoric and Composition, edited by Beth Leady, Erica Cirillo-McCarthy, Celeste Del Russo, and Amanda Fields. (Under contract)</li>
        </ul>
      </section>

      <section>
        <h2>Conference Participation</h2>
        <ul className='cv-entry-list'>
          <li>“<em>Crip Collaboration in Practice: How Disabled and Neurodivergent Scholars Write Together.</em>” Conference on College Composition and Communication. Cleveland, OH. March 2026.</li>
          <li>“<em>Disability SIG.</em>” International Writing Centers Association. Baltimore, MD. October 2023.</li>
          <li>“<em>Job Advertisements as Multi-Verse: Graduate Students and New Professionals Navigating Realities of the Writing Center Job Market.</em>” International Writing Centers Association. Baltimore, MD. October 2023. (Workshop in partnership with IWCA-GO)</li>
          <li>“<em>Creating Community through Collaborative Composing.</em>” IWCA Collaborative at CCCC. Chicago, IL. February 2023.</li>
          <li>“<em>Crip Classrooms: Academic Ableism and Foregrounding Disabled Perspectives.</em>” Conference on College Composition and Communication. Online. March 2022.</li>
          <li>“<em>Accessibility Centered: The Multimodal Toolkit from Theory to Praxis for Writing Center Tutor Training.</em>” International Writing Centers Association. Online. October 2021. (Workshop)</li>
          <li>“<em>Expanding Disability Access: Developing your Multimodal Toolkit for Tutoring Sessions.</em>” Online Writing Centers Association. Online. October 2021. (Workshop)</li>
          <li>“<em>Creating Accessible Collaborative Assignments for Neurodivergent Students.</em>” Society for Disability Studies Conference. Online. April 2021.</li>
          <li>“<em>Building Accessibility in Collaborative Writing Pedagogy.</em>” Conference on College Composition and Communication. Online. April 2021.</li>
          <li>“<em>Academic Ableism: Interrogating Common Tropes of Ability on Campus.</em>” Conference on College Composition and Communication. Milwaukee, WI. March 2020. (Cancelled due to COVID-19)</li>
          <li>“<em>Considering Collaboration through a Disability Perspective.</em>” Feminisms and Rhetorics. Harrisonburg, VA. November 2019.</li>
          <li>“<em>Writing Together: Students’ Perceptions on Collaboration.</em>” Thomas R. Watson Conference. Louisville, KY. October 2018.</li>
          <li>“<em>Have Dog, Will Tutor: An Autoethnographic Account of Tutoring with a Service Animal.</em>” International Writing Center Association Annual Conference. Atlanta, GA. October 2018.</li>
          <li>“<em>Human-Animal Entanglements: Reflections on Training a Service Animal.</em>” Critical Disability Studies Student Association Conference. York University, Canada. April 2018.</li>
          <li>“<em>Restrictions on Language for a Disabled Graduate Student.</em>” Conference on College Composition and Communication. Kansas City, MO. March 2018.</li>
          <li>“<em>Decoding [Academic] Systems: Writing Centers as Mentorship Sites.</em>” International Writing Center Association Annual Conference. Chicago, IL. November 2017.</li>
          <li>“<em>Invoking the Body: Touch and Making Meaning.</em>” Feminisms and Rhetorics. Dayton, OH. October 2017.</li>
          <li>“<em>Graduate Students Digitally Collaborating.</em>” Computers and Writing. Findlay, OH. June 2017.</li>
          <li>“<em>Madness in Academia: Stories and Sense-making from Neurodiverse Perspectives.</em>” Disability Roundtable. Survive &amp; Thrive. Online. April 2017.</li>
          <li>“<em>Cultivating Collaboration and Distributing Power in Writing Program Administration.</em>” Conference on College Composition and Communication. Portland, OR. March 2017.</li>
          <li>“<em>Writing Communities Across Boundaries: Student Experiences with Digital Collaboration.</em>” Computers and Writing. Rochester, NY. May 2016.</li>
          <li>“<em>Digital Collaboration and Graduate Students.</em>” Graduate Research Network. Rochester, NY. May 2016.</li>
          <li>“<em>Pedagogy Roundtable.</em>” EGSA Spring Conference. Tampa, FL. April 2016.</li>
          <li>“<em>Building Collaborative Communities: Empowering Students through Community-Engaged Writing.</em>” Conference on Community Writing. Boulder, CO. October 2015.</li>
          <li>“<em>Creating Connections: Student Perceptions of Collaboration in First-Year Writing Classrooms.</em>” Qualitative Research Network. Tampa, FL. March 2015.</li>
          <li>“<em>Navigating Student Collaborative Spaces.</em>” MEGAA Symposium. Oxford, OH. March 2015.</li>
          <li>“<em>Climbing Up the Vine.</em>” Computers and Writing. Pullman, Washington. June 2014.</li>
        </ul>
      </section>

      <section>
        <h2>Invited Lectures, Presentations, and Workshops</h2>
        <ul className='cv-entry-list'>
          <li>“<em>Accessibility at UW-Madison.</em>” Literature Pedagogy Proseminar. Madison, WI. October 2026. Presentation.</li>
          <li>“<em>Work with Your Brain: Developing Writing Strategies that Work for You.</em>” UW-Madison’s Plant Science Graduate Student Council. Madison, WI. October 2026. Workshop.</li>
          <li>“<em>Practicing Crip Collaboration: Disabled and Neurodivergent Approaches to Writing Together.</em>” Writing Program Administrators-Graduate Organization (WPA-GO). Online. July 2026. Workshop. (Co-presented with Rachel Herzel-Betz and Sujash Purna)</li>
          <li>“<em>Observing Growth, Supporting Change: A Writing Center View on Cultivating College Writers.</em>” Greater Madison Writing Project’s High School to College Writing Symposium. Madison, WI. November 2025. Keynote. (Co-presented with Dr. Jennifer Conrad)</li>
          <li>“<em>AI Writing and Disability.</em>” Greater Madison Writing Project’s Teaching and Writing in the Age of ChatGPT Symposium. Madison, WI. July 2023. Presentation.</li>
          <li>“<em>Disability and Accommodations in Higher Education.</em>” UNIV 375: Third Year Seminar in Diversity, Equity, and Inclusion. Pfeiffer University. February 2023. Lecture.</li>
          <li>“<em>Working in Higher Education with a Background in English and Disability Studies.</em>” ENGL 333: Professional Experiences in English. Pfeiffer University. February 2022. Lecture.</li>
          <li>“<em>Tutoring Disabled Students.</em>” Reading-Writing Center Staff Meeting. Florida State University. April 2018. Workshop.</li>
          <li>“<em>Working with Tutees with Disabilities.</em>” LAE 5946: Teaching English as a Guided Study. Florida State University. July 2017. Lecture.</li>
          <li>“<em>Collaborative Tools in Writing Classes: How to Make Digital Meaning Together.</em>” Digital Writing Collaborative. Miami University. March 2015. Workshop.</li>
        </ul>
      </section>

      <section>
        <h2>Teaching Experience</h2>
        <div className='cv-group'>
          <h3>Assistant Teaching Professor</h3>
          <p className='cv-group-details'>University of Wisconsin-Madison, English Department · Dec. 2024 – current</p>
          <ul className='cv-entry-list'>
            <li>ENGL 236: Writing for and about Disability, Spring 2026</li>
            <li>ENGL 795: Proseminar: Writing Center Theory and Practice, Fall 2026</li>
          </ul>
        </div>
        <div className='cv-group'>
          <h3>Teaching Faculty II</h3>
          <p className='cv-group-details'>Jan. 2021 – Dec. 2024</p>
          <ul className='cv-entry-list'>
            <li>ENGL 236: Writing for and about Disability, Fall 2023</li>
            <li>Proseminar: Writing Center Theory and Practice, Fall 2023, Spring 2024, &amp; Fall 2024</li>
          </ul>
        </div>
        <div className='cv-group'>
          <h3>Visiting Teaching Faculty</h3>
          <p className='cv-group-details'>Florida State University, English Department · Aug. 2020 – Dec. 2020</p>
          <ul className='cv-entry-list'>
            <li>ENC 2135: Research, Genre, and Context (online, synchronous), Fall 2020</li>
            <li>ENC 3416: Writing and Editing for Print and Online (online, synchronous), Fall 2020</li>
          </ul>
        </div>
        <div className='cv-group'>
          <h3>Graduate Instructor</h3>
          <p className='cv-group-details'>Florida State University, English Department · Aug. 2015 – May 2020</p>
          <ul className='cv-entry-list'>
            <li>ENC 2135: Research, Genre, and Context, Fall 2015, Spring 2016, Summer 2016</li>
            <li>ENC 2135: Research, Genre, and Context (online, asynchronous), Fall 2019 &amp; Spring 2020</li>
            <li>ENC 3416: Writing and Editing for Print and Online, Fall 2018, Spring 2019, Summer 2019, &amp; Fall 2019</li>
            <li>ENC 3493: Peer Tutoring in the Reading Writing Center and Digital Studio, Fall 2017 &amp; Spring 2018</li>
          </ul>
        </div>
        <div className='cv-group'>
          <h3>Graduate Instructor</h3>
          <p className='cv-group-details'>Miami University of Ohio, English Department · Aug. 2013 – May 2015</p>
          <ul className='cv-entry-list'>
            <li>ENG 111: Composition and Rhetoric, Fall 2013 &amp; Fall 2014</li>
            <li>ENG 112: Composition and Literature, Spring 2014 &amp; Spring 2015</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Administrative Experience</h2>
        <div className='cv-group'>
          <h3>Accessibility Coordinator</h3>
          <p className='cv-group-details'>University of Wisconsin-Madison, Writing Center · Jan. 2021 – current</p>
          <ul className='cv-entry-list'>
            <li>Develop and lead accessibility initiatives to increase access for disabled tutors and writers.</li>
            <li>Oversee and support efforts in recruiting, interviewing, hiring, training, supervising, and evaluating tutors.</li>
            <li>Teach and design ongoing education courses for experienced writing tutors.</li>
            <li>Design assessments to evaluate tutor performance and anti-racist knowledge.</li>
            <li>Collaborate with colleagues to create, develop, and plan workshops, programs, and special events across campus.</li>
            <li>Edit, write, and solicit content for the Writing Center’s award-winning blog, Another Word.</li>
            <li>Planned, organized, and delivered a tailored program for the Dissertation Writing Camp in both in-person and online modalities, targeting the needs of advanced doctoral candidates (May 2021, May 2023, May 2024, Jan. 2025, May 2025).</li>
            <li>Coordinated and facilitated delivery of the Grant Writing Camp for doctoral students in the Social Sciences and Humanities (June 2026).</li>
            <li>Lead weekly writing groups for graduate students (Spring 2021, Fall 2021, Spring 2022, Fall 2022, Spring 2023, Fall 2023, Spring 2024, Spring 2026, Fall 2026).</li>
            <li>Wrote grant applications for community outreach and writing support (Fall 2022, Fall 2023).</li>
          </ul>
        </div>
        <div className='cv-group'>
          <h3>Coordinator</h3>
          <p className='cv-group-details'>Florida State University, Reading-Writing Center · Aug. 2017 – May 2019</p>
          <ul className='cv-entry-list'>
            <li>Managed schedules and daily operations for undergraduate and graduate tutors.</li>
            <li>Created and delivered presentations on writing for faculty across campus.</li>
            <li>Designed and distributed promotional material for print and online.</li>
            <li>Planned and organized bi-weekly staff development.</li>
          </ul>
        </div>
        <div className='cv-group'>
          <h3>Rhetoric and Composition Program Assistant</h3>
          <p className='cv-group-details'>Florida State University, Rhetoric and Composition Program · Aug. 2016 – Apr. 2017</p>
          <ul className='cv-entry-list'>
            <li>Planned visiting scholars’ visits, created promotional material, and assisted with event coordination.</li>
            <li>Coordinated all program-related events.</li>
            <li>Maintained and updated the program’s website.</li>
          </ul>
        </div>
        <div className='cv-group'>
          <h3>Administrator</h3>
          <p className='cv-group-details'>Florida State University, Museum of Everyday Writing · May 2016 – Dec. 2017</p>
          <ul className='cv-entry-list'>
            <li>Maintained communications across email, blog, and social media platforms.</li>
            <li>Recruited students to participate in the Museum internship.</li>
            <li>Oversaw undergraduate interns’ work and projects for the Museum.</li>
          </ul>
        </div>
        <div className='cv-group'>
          <h3>Administrative Graduate Assistant</h3>
          <p className='cv-group-details'>Miami University, Center for Civic Engagement · Jan. 2014 – Aug. 2014</p>
          <ul className='cv-entry-list'>
            <li>Developed material and trained 10 undergraduate Regional Fellows for the Study of the United States Institute for Student Leaders (SUSI).</li>
            <li>Assumed administrative, counseling, and programming responsibilities for 20 undergraduate international students and 10 Regional Fellows.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Tutoring Experience</h2>
        <div className='cv-group'>
          <h3>Writing Tutor</h3>
          <p className='cv-group-details'>Florida State University, Reading-Writing Center · Aug. 2016 – May 2019</p>
          <ul className='cv-entry-list'>
            <li>Tutored recurring and walk-in graduate and undergraduate students on successful writing and reading habits in both face-to-face and online settings.</li>
            <li>Worked with students on a variety of projects including dissertations, prospectuses, external funding applications, scholarly articles, and in-class projects.</li>
          </ul>
        </div>
        <div className='cv-group'>
          <h3>Digital Pedagogy Consultant</h3>
          <p className='cv-group-details'>Miami University of Ohio, Digital Writing Lab · Sept. 2014 – May 2015</p>
          <ul className='cv-entry-list'>
            <li>Conducted individual consultations and facilitated workshops with teachers to improve digital pedagogy.</li>
            <li>Developed curricular materials for graduate assistants and faculty members.</li>
          </ul>
        </div>
        <div className='cv-group'>
          <h3>Mentor Writing Consultant</h3>
          <p className='cv-group-details'>University of Central Florida, University Writing Center · Aug. 2012 – July 2013</p>
          <ul className='cv-entry-list'>
            <li>Mentored new consultants in writing tutoring practices.</li>
          </ul>
        </div>
        <div className='cv-group'>
          <h3>Writing Consultant</h3>
          <p className='cv-group-details'>University of Central Florida, University Writing Center · Aug. 2011 – July 2012</p>
          <ul className='cv-entry-list'>
            <li>Assisted students in understanding complex assignments and rhetorical strategies for writing.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Service</h2>
        <ul className='cv-entry-list'>
          <li>Diversity and Inclusion Committee Member, English Department, UW-Madison, Fall 2023, Fall 2026</li>
          <li>Mentor, Coalition of Feminist Scholars in the History of Rhetoric and Composition, Fall 2026</li>
          <li>Reviewer, Disability Studies Quarterly, Spring 2026</li>
          <li>Reviewer, Journal of Writing Assessment special issue on disability, neurodiversity, and writing assessment, Spring 2026</li>
          <li>Chair, CCCC Disability in College Composition Travel Awards Selection Committee, Fall 2023</li>
          <li>Reviewer, The Peer Review special issue on Enacting Linguistic Justice In/Through Writing Centers, Fall 2023</li>
          <li>Disability Task Force Member, International Writing Centers Association, March 2023 – May 2024</li>
          <li>Accessibility Committee Member, Online Writing Centers Association, Feb. 2021 – 2022</li>
          <li>Assistant Editor, Best of the Journals in Rhetoric and Composition 2021, Fall 2020</li>
          <li>Reviewer, Writing Spaces 4th edition, Fall 2020</li>
          <li>Accessibility Committee Member, Writing Program Administrators—Graduate Organization, Sept. 2019 – May 2020</li>
          <li>Ambassador, Office of Accessibility Services, Florida State University, Jan. 2019 – May 2020</li>
          <li>Diversity and Outreach Committee Member, Writing Program Administrators—Graduate Organization, Aug. 2018 – Aug. 2019</li>
          <li>Committee Member, Reading-Writing Center Committee, Florida State University, Aug. 2017 – Aug. 2018</li>
          <li>Volunteer, National Day on Writing, Florida State University, Oct. 2016, 2017, 2018</li>
          <li>Committee Member, College Composition Committee, Florida State University, Aug. 2016 – Dec. 2016</li>
          <li>Composition Committee Member, Miami English Graduate and Adjunct Association (MEGAA), Miami University, Aug. 2014 – May 2015</li>
        </ul>
      </section>

      <section>
        <h2>Awards</h2>
        <ul className='cv-entry-list'>
          <li>McBurney Disability Resource Center’s Forward in Access, 2025</li>
          <li>Academic Staff Professional Development Grant, 2022</li>
          <li>FSU Student Star, Sept. 2019</li>
          <li>Spencer Foundation Award Recipient, 2019</li>
          <li>FSU Gates Fellowship, 2015—2019</li>
          <li>UCF Study Abroad Merit Scholarship, 2012</li>
          <li>UCF Student Government Association (SGA) Tutor Scholarship, 2012</li>
          <li>UCF SGA Campus Involvement Scholarship, 2012</li>
        </ul>
      </section>

      <section>
        <h2>Professional Development</h2>
        <div className='cv-group'>
          <h3>Academic Events Attended</h3>
          <ul className='cv-entry-list'>
            <li>UW-Madison’s Teaching Academy Winter Retreat, Spring 2026</li>
            <li>Conference on College Composition and Communication, Spring 2025</li>
            <li>Big 10 Academic Alliance Writing Center Directors Meeting, Chicago, IL, Spring 2025</li>
            <li>UW-Madison Diversity Forum: Threads of Belonging: Navigating Differences and Building Community, Fall 2024</li>
            <li>UW-Madison Diversity Forum: Bridging the Divide: Realizing Belonging While Engaging Difference, Fall 2023</li>
            <li>Conference on College Composition and Communication, Spring 2023</li>
          </ul>
        </div>
        <div className='cv-group'>
          <h3>Workshops Attended</h3>
          <ul className='cv-entry-list'>
            <li>Ally and Online Course Accessibility Training, Florida State University, February 2020</li>
            <li>Writing Assessment Institute, Florida State University, Spring 2019</li>
            <li>Early Career Scholars with Disabilities, American Educational Research Association Conference, April 2019</li>
          </ul>
        </div>
      </section>
    </Col>
  </Row>

export default CurriculumVitae
