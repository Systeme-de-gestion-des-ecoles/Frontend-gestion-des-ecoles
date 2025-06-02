

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Eleve from './pages/Eleve';
import Parent from './pages/Parent';
import Surveillant from './pages/Surveillant';
import Remplissage_note from './pages/Remplissage_note';
import Assignation from './pages/Assigner_matiere';
import AjouterMatiere from './pages/Ajouter_matiere';
import Chauffeur from './pages/Chauffeur';
import Releve_note from './pages/Releve_note';
import Profil_eleve from './pages/Profil_eleve';
import Utilisateurs from './pages/Utilisateurs';
import ListAdmin from './pages/ListAdmin';
import ListChauffeur from './pages/ListChauffeur';
import ListCuisinier from './pages/ListCuisinier';
import ListParent from './pages/Listparent';
import ListSurveillant from './pages/ListSurveillant';
import ListEnseignant from './pages/ListEnseignant';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/chauffeur" element={<Chauffeur/>} />
        <Route path="/eleve" element={<Eleve/>} />
        <Route path="/parent" element={<Parent/>} />
        <Route path="/surveillant" element={<Surveillant/>} />
        <Route path="/remplissage_note" element={<Remplissage_note/>} />
        <Route path="/assignation" element={<Assignation/>} />
        <Route path="/ajouter_matiere" element={<AjouterMatiere/>} />
        <Route path="/releve_note" element={<Releve_note/>} />
       <Route path="/profil_eleve" element={<Profil_eleve/>} />
       <Route path="/utilisateurs" element={<Utilisateurs/>} />
       <Route path="/listadmin" element={<ListAdmin/>} />
       <Route path="/listchauffeur" element={<ListChauffeur/>} />
       <Route path="/listcuisinier" element={<ListCuisinier/>} />
       <Route path="/listparent" element={<ListParent/>} />
       <Route path="/listsurveillant" element={<ListSurveillant/>} />
       <Route path="/listenseignant" element={<ListEnseignant/>} />


      </Routes>
    </Router>
  );
}

export default App;