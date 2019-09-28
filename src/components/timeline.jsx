import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at RBS India<span>2019-present</span></h2>
                        <p>I have joined the Royal bank of Scotland as a Software Developer in CPB team. My work is to  develop "UI with Java microservices at backend" for some critical Bank applications which directly facing customer.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>PostGraduation from IIIT Delhi<span>2015-2019</span></h2>
                        <p>I have recently done my Post Graduation from Indraprastha Institute of Information Technology, Delhi specialized in field of Data Science. I have done various courses such as Advance ML, Statistical ML,Machine Learning, Natural Language Processing, Information Retrieval,Mobile Computing, Foundations of Parallel Programming, Graduate Algorithm.I have also been part of Student Council as a represntative for M.Tech batch 2017 during my stay. I have been part of various extra curricular activities such as Organising Alumni Meet 2018 and Sponsershp team for Annual Cultural Featival.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduation and Schooling <span>2003-2015</span></h2>
                        <p>I have completed my Graduation from Maharaja Agrasen Institute of Technology (GGSIPU) in Information Technology Engineering. I have done my higher secondary education in Science with Physics, Chemistry, Maths with 84.4% marks. Physics and maths helped me to develop analytical skills. I was in my school music team from class 5th. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}