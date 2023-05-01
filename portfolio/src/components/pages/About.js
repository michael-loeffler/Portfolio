import React from 'react';
import headshot from '../../assets/Loeffler, Michael - Headshot small.jpg'

export default function About() {
  return (
    <div style={{paddingBottom: "50px"}}>
      <h1 className='text-center mt-3'>About Me</h1>
      <div className="mt-4 d-flex justify-content-around align-items-top mh-50">
        <img className='col-md-3' src={headshot} alt=""/>
          <p className='ml-3 mb-0 col-md-7 lead'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac lacus finibus, aliquet dolor quis, varius massa. Integer facilisis tellus velit, at interdum libero scelerisque sit amet. Proin eleifend nunc eu odio pretium blandit. Proin accumsan vestibulum sem, quis ultrices nibh varius nec. Nunc massa ligula, consequat a dignissim ornare, aliquet et risus. Nam gravida sem nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam rhoncus auctor felis quis rhoncus. Donec ut leo mi. Fusce turpis quam, auctor dapibus enim sit amet, placerat lobortis mauris. Sed et nibh in tellus varius luctus et nec magna. Vivamus quis magna ullamcorper, ornare felis non, congue felis. Proin porttitor nisl sit amet nulla accumsan tempus. Maecenas vitae suscipit metus. Praesent mattis ultricies turpis, nec placerat arcu dictum convallis. Morbi eget eleifend magna. Nunc nulla elit, blandit eu sodales tincidunt, maximus eget neque. Suspendisse commodo diam at lorem vestibulum sollicitudin. In nunc ex, gravida ac laoreet consectetur, feugiat at ex. Aliquam facilisis lorem libero, eget convallis lectus iaculis nec. Cras pellentesque turpis non dui pretium semper. Nulla gravida, tellus non semper interdum, ligula odio placerat lectus, quis aliquet neque augue sed felis. Quisque eu nisi a massa gravida tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus placerat gravida elit aliquet gravida. Phasellus venenatis, turpis in porttitor vestibulum, lacus libero rutrum nulla, ac venenatis nisi purus eu eros. Praesent cursus ultricies nulla, ut vulputate ligula vehicula sed. Aliquam ut dapibus ligula. Donec dictum porttitor pulvinar.
          </p>
      </div>
    </div>
  );
}
