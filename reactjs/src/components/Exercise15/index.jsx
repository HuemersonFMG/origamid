import Slide from "./Slide"

const Index = () => {
  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1'
    },
    {
      id: 'slide2',
      text: 'Slide 2'
    },
    {
      id: 'slide3',
      text: 'Slide 3'
    },
  ];

  return (
    <section className="section exercises15">
      <div className='container'>
        <Slide slides={slides} />
      </div>
    </section>
  )
}

export default Index
