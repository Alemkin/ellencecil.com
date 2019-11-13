import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const CurriculumVitae = () =>
  <Row className='curriculum-vitae mt-4 page-wrapper' tag={'main'}>
    <Col xl={{ size: 10, offset: 1 }}>
      <h1 className='mb-4'>{'CV'}</h1>

      <h6>{'Education'}</h6>
      <p>
        {'Ph.D., Rhetoric and Composition — Florida State University — Spring 2020 (expected)'}
        <span className='d-block'>{'Dissertation: '}<i>{'Including Disability in Collaborative Writing Pedagogy'}</i></span>
      </p>
      <p>
        {'M.A., Rhetoric and Composition — Miami University — Summer 2015'}
        <span className='d-block'>{'Thesis: '}
          <a target='blank' href='https://drive.google.com/file/d/0B7y-SuixtmgAbnlhcmw2SkhZRFE/view?usp=sharing'>
            <i><u>{'Approaches for Collaboration: Student Perceptions on Writing Together'}</u></i>
          </a>
        </span>
      </p>
      <p>{'B.A., English Literature — University of Central Florida — Summer 2013'}</p>

      <h6>{'Publications & Scholarship in Progress'}</h6>
      <p>
        {'Cecil, Ellen. “'}
        <a href='https://writingandrhetoric.cah.ucf.edu/stylus/files/1_2/stylus1_2-cecil.pdf' target='_blank'>
          <u>
            {'Review of Literature for ‘What Interests Students in Recreational Reading?’'}
          </u>
        </a>
        {'”'}
        <span className='d-block'>
          <i>{'Stylus: A Journal of First Year Writing'}</i>{', vol. 1, no. 2, 2010, pp. 10-12. (Non-peer Reviewed)'}
        </span>
      </p>
      <p>{'Cecil-Lemkin, Ellen, Jennifer Enoch, Megan Keaton, and Travis Maynard. “Archival Internships as Techne: Teaching the Archive through the Museum of Everyday Writing’s Undergraduate Internship.” Teaching Rhetoric and Composition Through the Archives, edited by Tarez Samra Graban and Wendy Hayden. (Accepted Manuscript)'}</p>
      <p>{'Cecil-Lemkin, Ellen and Michael Neal. “Moving Towards Accessibility: Addressing Two Myths of Universal Access in Online Instruction.” (Proposal Accepted)'}</p>
      <p>{'Cecil-Lemkin, Ellen. “Human-Animal Entanglements: Navigating Access with an Emotional Support Animal.” (Under Review)'}</p>
      <p>{'Cecil-Lemkin, Ellen. “Managing Power: Collaborative Models of Writing Program Administration.” (In Progress)'}</p>
      <p>{'Cecil-Lemkin, Ellen and Kyllikki Rytov. “An Ethic of Rhetorical Touch: Intentional Strategies for Embodied Teaching.” (In Progress)'}</p>

      <h6>{'Conference Presentations'}</h6>
      <p>
        <a href='/scholarship/femrhetpresentationtranscript.pdf' target='_blank'>
          {'“'}
          <u>
            {'Considering Collaboration through a Disability Perspective'}
          </u>
          {'.”'}
        </a>
        <i>{' Feminisms and Rhetorics.'}</i> {' Harrisonburg, VA. November 2019'}
      </p>
      <p>{'“Writing Together: Students’ Perceptions on Collaboration.”'} <i>{' Thomas R. Watson Conference.'}</i> {' Louisville, KY. October 2018.'}</p>
      <p>{'“Have Dog, Will Tutor: An Autoethnographic Account of Tutoring with a Service Animal.”'} <i>{' International Writing Center Association Annual Conference.'}</i> {' Atlanta, GA. October 2018.'}</p>
      <p>{'“Human-Animal Entanglements: Reflections on Training a Service Animal.”'} <i>{' Critical Disability Studies Student Association Conference.'}</i> {' York University, Canada. April 2018.'}</p>
      <p>{'“Restrictions on Language for a Disabled Graduate Student.”'} <i>{' Conference on College Composition and Communication.'}</i> {' Kansas City, MO. March 2018.'}</p>
      <p>{'“Decoding [Academic] Systems: Writing Centers as Mentorship Sites."'} <i>{' International Writing Center Association Annual Conference.'}</i> {' Chicago, IL. November 2017.'}</p>
      <p>{'“Invoking the Body: Touch and Making Meaning.”'} <i>{' Feminisms and Rhetorics.'}</i> {' Dayton, OH. October 2017.'}</p>
      <p>
        <a href='https://prezi.com/view/cveTGJGGGHRSORxFg0Vc/' target='_blank'>
          {'“'}
          <u>
            {'Graduate Students Digitally Collaborating'}
          </u>
          {'.”'}
        </a>
        <i>{'Computers and Writing.'}</i> {' Findlay, OH. June 2017'}
      </p>
      <p>{'“Madness in Academia: Stories and Sense-making from Neurodiverse Perspectives.” Disability Roundtable.'} <i>{' Survive & Thrive.'}</i> {' Online. April 2017.'}</p>
      <p>
        <a href='https://drive.google.com/open?id=1OwkwgGStU6fztGIJO3ZpIyZ4PdcIjCceOd0mp7K8UOA' target='_blank'>
          {'“'}
          <u>
            {'Cultivating Collaboration and Distributing Power in Writing Program Administration'}
          </u>
          {'.”'}
        </a>
        <i>{'Conference on College Composition and Communication.'}</i> {' Portland, PR. March 2017.'}
      </p>
      <p>
        <a href='https://drive.google.com/open?id=1vxweGqm_46fJwYSLSA1JD6N5hC7Vwl2jfLWG5psiGxc' target='_blank'>
          {'“'}
          <u>
            {'Writing Communities Across Boundaries: Student Experiences with Digital Collaboration'}
          </u>
          {'.”'}
        </a>
        <i>{'Computers and Writing.'}</i> {' Rochester, NY. May 2016.'}
      </p>
      <p>{'“Digital Collaboration and Graduate Students.”'} <i>{' Graduate Research Network.'}</i> {' Rochester, NY. May 2016.'}</p>
      <p>
        <a href='https://drive.google.com/open?id=1a200xt3JBnty7iO7w7dnmuP3xSXb_yQFyS2Ezdq10-Y' target='_blank'>
          {'“'}
          <u>
            {'Pedagogy Roundtable'}
          </u>
          {'.”'}
        </a>
        <i>{'EGSA Spring Conference.'}</i> {' Tampa, FL. April 2016.'}
      </p>
      <p>
        <a href='https://buildingcollaborativecommunities.wordpress.com/' target='_blank'>
          {'“'}
          <u>
            {'Building Collaborative Communities: Empowering Students through Community-Engaged Writing'}
          </u>
          {'.”'}
        </a>
        <i>{'Conference on Community Writing.'}</i> {' Boulder, CO. October 2015.'}
      </p>
      <p>
        <a href='https://docs.google.com/document/d/1UlMnJdxcw8_qmAJS0EP2jQL_YsrPP0xI0pAkqWREAwA/edit?usp=sharing' target='_blank'>
          {'“'}
          <u>
            {'Creating Connections: Student Perceptions of Collaboration in First-Year Writing Classrooms'}
          </u>
          {'.”'}
        </a>
        <i>{'Qualitative Research Network.'}</i> {' Tampa, FL. March 2015.'}
      </p>
      <p>
        <a href='https://docs.google.com/presentation/d/17SjIURnNqxSFFbaZHliC72FSYg1lbPUSZ9jOYLsJM5w/edit?usp=sharing' target='_blank'>
          {'“'}
          <u>
            {'Navigating Student Collaborative Spaces'}
          </u>
          {'.”'}
        </a>
        <i>{'MEGAA Symposium.'}</i> {' Oxford, OH. March 2015.'}
      </p>
      <p>{'“Climbing Up the Vine.”'}<i>{' Computers and Writing.'}</i>{' Pullman, Washington. June 2014.'}</p>

      <h6>{'Invited Lectures'}</h6>
      <p>{'“Tutoring Disabled Students.” Reading Writing Center Staff Meeting. Florida State University. April 2018.'}</p>
      <p>{'“Working with Tutees with Disabilities.” LAE 5946: Teaching English as a Guided Study. Florida State University. July 2017.'}</p>
      <p>{'“Collaborative Tools in Writing Classes: How to Make Digital Meaning Together.” Digital Writing Collaborative. Miami University. March 2015.'}</p>

      <h6>{'Teaching Experience'}</h6>
      <div>
        <span className='d-block'>{'ENC 3416: Writing and Editing for Print and Online'}</span>
        <span className='d-block'>{'Florida State University, Fall 2018, Spring 2019, Summer 2019, & Fall 2019'}</span>
        <ul>
          <li>{'Teach junior and senior students in the major the principles of composing and rhetoric, especially the ways they function across different composing spaces'}</li>
        </ul>
      </div>
      <div>
        <span className='d-block'>{'ENC 3493: Peer Tutoring in the Reading Writing Center and Digital Studio'}</span>
        <span className='d-block'>{'Florida State University, Fall 2017 & Spring 2018'}</span>
        <ul>
          <li>{'Prepared undergraduate majors for tutoring in the writing center and consulting in the digital studio'}</li>
        </ul>
      </div>
      <div>
        <span className='d-block'>{'ENC 2135: Research, Genre, and Context'}</span>
        <span className='d-block'>{'Florida State University, Fall 2015, Spring 2016, Summer 2016, & Fall 2019 (online)'}</span>
        <ul>
          <li>{'Sophomore level composition course, focused on teaching rhetorical context and genre conventions with particular attention to transfer to classes within students’ majors'}</li>
        </ul>
      </div>
      <div>
        <span className='d-block'>{'ENG 112: Composition and Literature'}</span>
        <span className='d-block'>{'Miami University, Spring 2014 & 2015'}</span>
        <ul>
          <li>{'First-year composition course emphasizing writing and reading on a special literature topic'}</li>
        </ul>
      </div>
      <div>
        <span className='d-block'>{'ENG 111: Composition and Rhetoric'}</span>
        <span className='d-block'>{'Miami University, Fall 2013 & 2014'}</span>
        <ul>
          <li>{'First-year composition course with an emphasis on teaching rhetorical awareness'}</li>
        </ul>
      </div>

      <h6>{'Administration'}</h6>
      <div>
        {'Coordinator, Florida State University, Reading and Writing Center, Aug. 2017 – May 2019'}
        <ul>
          <li>{'Managed undergraduate and graduate tutor schedules '}</li>
          <li>{'Scheduled enrolled tutees appointments '}</li>
          <li>{'Planned and participate in bi-weekly staff development'}</li>
        </ul>
      </div>
      <div>
        {'Rhetoric and Composition Program Assistant, Florida State University, Rhetoric and Composition Program, Aug. 2016 – Apr. 2017'}
        <ul>
          <li>{'Planned visiting speaker’s visits, created promotional material, and assisted with event coordination'}</li>
          <li>{'Coordinated all program related events'}</li>
          <li>{'Maintained and updated program’s website'}</li>
        </ul>
      </div>
      <div>
        {'Administrator, Florida State University, Museum of Everyday Writing, May 2016 – Dec. 2017'}
        <ul>
          <li>{'Maintained Museum’s updates and communications'}</li>
          <li>{'Recruited students to participate in Museum internship'}</li>
          <li>{'Oversaw undergraduate interns’ work and projects for Museum'}</li>
        </ul>
      </div>
      <div>
        {'Administrative Graduate Assistant, Miami University, Center for Civic Engagement, Jan. 2014 – Aug. 2014'}
        <ul>
          <li>{'Developed material and train 10 undergraduate Regional Fellows for the Study of the United States Institute for Student Leaders (SUSI)'}</li>
          <li>{'Assumed administrative, counseling, and programming responsibilities for 20 undergraduate international students and 10 Regional Fellows for SUSI'}</li>
        </ul>
      </div>

      <h6>{'Service'}</h6>
      <p>{'Accessibility Committee Member, Writing Program Administrators—Graduate Organization, Sept. 2019 – Present'}</p>
      <p>{'Ambassador, Student Disability Resource Center, Florida State University, Jan. 2019 – Present'}</p>
      <p>{'Diversity and Outreach Committee Member, Writing Program Administrators—Graduate Organization, Aug. 2018 – Aug. 2019'}</p>
      <p>{'Committee Member, Reading-Writing Center Committee, Florida State University, Aug. 2017 – Aug. 2018'}</p>
      <p>{'Volunteer, National Day on Writing, Florida State University, Oct. 2016, 2017, 2018'}</p>
      <p>{'Writing Tutor, Florida State University, Reading-Writing Center, Aug. 2016 – May 2019'}</p>
      <p>{'Committee Member, College Composition Committee, Florida State University, Aug. 2016 – Dec. 2016'}</p>
      <p>{'Digital Pedagogy Consultant, Digital Writing Lab, Miami University, Sept. 2014 – May 2015'}</p>
      <p>{'Composition Committee Member, Miami English Graduate and Adjunct Association (MEGAA), Miami University, Aug. 2014 – May 2015'}</p>

      <h6>{'Honors and Awards'}</h6>
      <p>
        <span className='d-block'>{'FSU Star Student, Sept. 2019'}</span>
        <span className='d-block'>{'Spencer Foundation Award Recipient, 2019'}</span>
        <span className='d-block'>{'FSU English Graduate Assistantship, 2015—present'}</span>
        <span className='d-block'>{'FSU Gates Fellowship, 2015—2019'}</span>
        <span className='d-block'>{'MU English Graduate Assistantship, 2013—2015'}</span>
      </p>

      <h6>{'Professional Development'}</h6>
      <p>
        <i>{'Workships Attended:'}</i>
        <span className='d-block'>{'Writing Assessment Institute, Florida State University, Spring 2019'}</span>
        <span className='d-block'>{'Early Career Scholars with Disabilities, American Educational Research Association Conference, Spring 2019'}</span>
      </p>
      <p>
        <i>{'Memberships:'}</i>
        <span className='d-block'>{'National Council of Teachers of English – CCC'}</span>
        <span className='d-block'>{'International Writing Centers Association'}</span>
      </p>
    </Col>
  </Row>

export default CurriculumVitae
