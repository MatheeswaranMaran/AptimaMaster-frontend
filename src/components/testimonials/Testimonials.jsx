import React from 'react'
import "./Testimonials.css"

const Testimonials = () => {
    const testimonialsData=[
        {
            id:1,
            name: "Abisankar S",
            position: "Student",
            message: 
                "This platform helped me learn so effectively. The courses are amazing.",
            image:
            "https://avatarfiles.alphacoders.com/375/thumb-350-375590.webp"
        },
        {
            id: 2,
            name: "Arjun M",
            position: "Student",
            message: 
                "This platform helped me learn so effectively. The courses are amazing.",
            image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9QEsyOvIke8ntCu44R0oTVdGUdu44YhFHQ&s"
        }
    ];
  return (
    <section className='testimonials'>
        <h2>
            What our students say
        </h2>
        <div className="testimonials-cards">
            {
                testimonialsData.map((e)=>(
                    <div className="testimonial-card" key={e.id}>
                        <div className="student-image">
                            <img src={e.image} alt="" />
                        </div>
                        <p className="message">{e.message}</p>
                        <div className="info">
                            <p className="name">{e.name}</p>
                            <p className="position">{e.position}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>

  )
}

export default Testimonials