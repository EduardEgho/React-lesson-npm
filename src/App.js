function Header () {
  return (
      <>
      <h1>Header</h1>
      <Title/>
      </>
  )
}

function Content () {
    return (
        <>
        <h1>Content</h1>
        <Title/>
        </>

    )
}

function Title () {
    return (
        <h2>title</h2>
    )
}


function Footer () {
  return (
        <>
            <h1>Footer</h1>
            <Title/>
        </>

  )
}


function App() {
  return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
  );
}

export default App;