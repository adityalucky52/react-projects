import countryFacts from '../api/countryData.json';

function About() {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the interesting fact
        <br />
        we're proud of
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((country)=>{
          const { id, countryName, capital, population, interestingFact } = country;
          
          
          if (!countryName || !capital || !population || !interestingFact) {
            return null; 
          }
          return(
            <div className="card" key={id}>
              <div className="container-card">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital:</span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population:</span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact:</span>
                  {interestingFact}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default About;
