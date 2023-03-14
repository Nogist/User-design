import React, {useEffect} from 'react';
import { BsBehance } from 'react-icons/bs';
import { FiDribbble } from 'react-icons/fi';
import UserProjectsContent from '../../components/UserProjectsContent';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const UserProjects = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: ref1, inView: visible1 } = useInView({
    threshold: 0.10,
    rootMargin: "-200px 0px -80px 0px",
  });
  return (
    <div ref={ref1} className={`users__projects ${visible1 ? 'active':'hiddentext'}`}>
      <div>
        <UserProjectsContent 
          text='ux design' first= 'chowai' 
          second= 'tutorboost' third='medicci'
          fourth='nftloan' fifth= 'jazzhut' 
          linkfirst= '/'
          linksecond= '/TutorBoost'
          linkthird= '/Medicci'
          linkfourth= '/NftLoan'
          linkfifth= '/'
        />
        <div className='users__project__view'>
          <Link to='/allprojects'>
            <h1>view</h1>
            <h1>all</h1>
          </Link>
        </div>
      </div>
      <div className='users__project__links'>
        <div> 
          <FiDribbble />
          <span>
            <BsBehance  />
          </span>
        </div>
        <UserProjectsContent
          text='ui design' first= 'dashboard' 
          second= 'interior' third='craigslist'
          fourth='baas' fifth= 'the awakened woman' 
          linkfirst= '/'
          linksecond= '/'
          linkthird= '/'
          linkfourth= '/Baas'
          linkfifth= '/AwakenedWoman'
        />
      </div>
    </div>
  )
}

export default UserProjects