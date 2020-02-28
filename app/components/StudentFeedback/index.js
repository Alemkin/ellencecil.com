import React from 'react'
import { Row, Col } from 'reactstrap'
import './index.scss'

const Teaching = () =>
  <Row className='student-feedback mt-4 page-wrapper' tag={'main'}>
    <Col xs={12}>
      <Row>
        <Col xs={12} md={5}>
          <h2 className='mb-4'>{'Student Feedback'}</h2>
          <ul>
            <li><a href='/observations/margaretstudentfeedback.pdf' target='_blank'>{'Course Feedback from Margaret Bell'}</a></li>
            <li><a href='/observations/kaylastudentfeedback.pdf' target='_blank'>{'Course Feedback from Kayla M. Walston'}</a></li>
          </ul>
        </Col>
        <Col xs={12} md={7}>
          <img className='w-100 mb-4' title='Ellen and Rosie in front of a group of her students' alt='Ellen and Rosie kneel in front of a large group of students facing the camera, smiling' src={require('../../../images/feedbackgroup.jpeg')} />
        </Col>
      </Row>
    </Col>
    <Col xs={12}>
      <h5 className='mt-4'>{'From Course Evaluations'}</h5>
      <h6>{'ENC 2135, Florida State University, 2015-2016:'}</h6>
      <ul>
        <li>{'"Holy cow!! The course was wonderful. I super loved it. She should not improve anything, she is the best. Someone give this girl her doctorate and a raise!!"'}</li>
        <li>{'“I liked Ms. Cecil’s teaching style in that she had us do an activity or assignment related to the concept we had to understand before we ever had to apply the concept in graded work. Because of this teaching style, I feel as though I understand the course material very well. Ms. Cecil is also a very knowledgeable and understanding professor, I enjoyed having her for this course.”'}</li>
        <li>{'"The course increased my knowledge and idea of what writing can be. The instructor was very laid back, easy going, non-critical. This made the class much more enjoyable and less stressful."'}</li>
        <li>{'"The instructor is very nice and polite and funny. She cares for her students and makes the class as interesting/engaging as she can."'}</li>
        <li>{'“The instructor did a good job of writing responses and helping each student figure out how they could personally develop their writing style.”'}</li>
        <li>{'“I like that Ms. Cecil was very available when it came to her office hours. She was always willing to sit down with me and got me out of a rut on a few of my assignments.”'}</li>
        <li>{'"I liked the attendance questions we had to answer at the start of each class. They made me feel like I had a better idea of who my classmates are as people, plus it was a fun way to start class.”'}</li>
        <li>{'“I liked how she made us interact in groups. For instance, we did a lot of peer review and she guided us through the process. This was helpful because it gave me feedback I wouldn’t have given to myself and it helped me come out of an introverted shell I had.”'}</li>
        <li>{'“I liked how passionate and dedicated she was to teaching us. I also thoroughly enjoyed the fact that she made the class interesting and time go by really fast by incorporating a variety of videos, music, computer, and group activities.” '}</li>
        <li>{'"She set clear expectations and communicated well. She really seemed to care about her students. She also gave helpful feedback. She was approachable."'}</li>
        <li>{'"I actually enjoyed the rigger of this class. It really helped me keep on top of assignments and really helped the learning process. Although at first I thought the group journals would be annoying I found that it actually helped me learn the material. Using Prezi was a great tool in class as well as the videos used to illustrate concepts. So far after a year at FSU this was my favorite structured class! Keep up the awesome teaching!" '}</li>
        <li>{'"Made everything accessible."'}</li>
        <li>{'"NO improvements! Loved teacher and good course! THANK YOU FOR BEING AWESOME!"'}</li>
        <li>{'“Ellen is da bomb.”'}</li>
      </ul>
      <h6>{'ENG 112, Miami University, 2014:'}</h6>
      <ul>
        <li>{'When asked about the strengths of the course:'}</li>
        <li>{'“The fact that you try to get to know us all personally and it is such a chill and welcoming environment, It definitely helps us become more relaxed and open to discussing and doing our work.”'}</li>
        <li>{'“I like how we have interactive activities to do everyday. A lot of group work that helps us improve our papers and get feedback on it. A lot of what we do is really helpful.”'}</li>
        <li>{'“The strengths of this course lie in the topics covered and how the professor approaches them. I feel like this course provides the class with a unique approach into literature and as a whole, Ellen manages to make us dig deeper into a “different” genre of literature. I do not see any weaknesses in this course.”'}</li>
        <li>{'“I really like all the info you provided me with. You make english fun when i have hated english in the past.”'}</li>
        <li>{'“The strengths are that Ellen is very good at helping students when they are lost. She also knows how to open up people’s minds to different ideas.”'}</li>
        <li>{'“This class is very flexible and well organized, it also taught me to write on a more creative and personal level with an audience.”'}</li>
        <li>{'“Teacher was awesome. She always cared about the students.”'}</li>
        <li>{'“There were a lot of different mediums of learning in this class. We used lecture, online forums, videos, etc. to learn the course material. At times, some of the work we did seemed tedious and unnecessary, such as the overload of forum posts in the beginning of the semester. Ellen listened to our suggestions and reduced the amount of busy work.”'}</li>
        <li>{'“The strength in this course relies soley upon the teacher. I believe that my teacher took the class seriously, and actually wanted to TEACH us how to be better writers. Ellen was a good teacher.”'}</li>
        <li>{'“The strengths of this class were Ellen’s overall teaching style and relaxed atmosphere of the class. We were treated as adults and expected to do our work, but I always enjoyed coming to class.”'}</li>
      </ul>
    </Col>
  </Row>

export default Teaching
