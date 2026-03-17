import { useState } from "react";
const THEMES = {
1: {
color: "#60a5fa", bg: "#1e3a5f",
label: ["THÈME 1", "Droit &", "Règle juridique"],
branches: [
{ id:"ch1", label:["CH.1","Règles vie","sociale"], angle:215,
detail:{ title:"CH.1 – Les règles de la vie sociale",
chips:["Finalités","Caractères","Branches du droit"],
points:[
["Finalités du droit :","maintenir la paix sociale, protéger les individus, définir droits et obligations"],
["Caractère général & abstrait :","s'applique à tous dans la même situation, sans personnalisation"],
["Caractère obligatoire :","règles impératives (ordre public, indérogeables) vs supplétives (dérogeables par accord)"],
["Caractère coercitif :","l'État peut imposer des sanctions civiles, pénales ou administratives"],
["Droit vs Morale :","morale = subjective, non sanctionnée par l'État. Droit = objectif, sanctionné."],
["Droit public :","État ↔ particuliers (constitutionnel, administratif, pénal)"],
["Droit privé :","entre particuliers (civil, commercial, travail, consommation)"],
],
retenir:"La règle de droit est GÉNÉRALE, OBLIGATOIRE et COERCITIVE. Ce qui la distingue de la morale : la sanction étatique.",
leaves:["Impératives vs supplétives","Droit public vs privé","Droit vs morale"]
}
},
{ id:"ch2", label:["CH.2","Sources","du droit"], angle:268,
detail:{ title:"CH.2 – Les sources du droit objectif",
chips:["Pyramide de Kelsen","Sources UE","Sources nationales","Jurisprudence"],
points:[
["Pyramide de Kelsen :","Constitution > Traités > Lois > Règlements. Norme inférieure ne peut contredire la supérieure."],
["Constitution :","bloc constitutionnel = Constitution 1958 + DDHC 1789 + Préambule 1946 + Charte env. 2004"],
["Règlement UE :","applicable directement dans tous les États membres sans transposition"],
["Directive UE :","fixe un objectif, les États doivent la transposer en droit national"],
["Loi :","votée par le Parlement (art. 34). Projet (gouvernement) ou proposition (parlementaire)"],
["Règlements :","décrets, arrêtés (art. 37 Constitution). Pouvoir exécutif."],
["QPC :","question prioritaire de constitutionnalité – depuis 2010 – permet d'écarter une loi inconstitutionnelle"],
],
retenir:"Règlement UE = application immédiate et directe. Directive UE = transposition obligatoire en droit national dans le délai fixé.",
leaves:["Pyramide de Kelsen","Règlement vs Directive UE","QPC & conventionalité"]
}
},
{ id:"ch3", label:["CH.3","Preuve","des droits"], angle:320,
detail:{ title:"CH.3 – La preuve des droits",
chips:["Objet de la preuve","Charge","Modes de preuve"],
points:[
["3 questions :","Quoi prouver ? Qui prouve ? Comment prouver ?"],

["Acte juridique :","manifestation de volonté → preuve par écrit exigée au-delà de 1 500 €"],
["Fait juridique :","événement auquel la loi attache des effets → preuve LIBRE"],
["Charge de la preuve :","pèse sur le DEMANDEUR (art. 1353 C.civ.). En cas de doute, il perd."],
["Preuves parfaites :","acte authentique (notaire), acte sous signature privée, aveu judiciaire, serment décisoire"],
["Acte authentique :","rédigé par officier ministériel → foi jusqu'à inscription de faux"],
["En matière commerciale :","preuve LIBRE entre commerçants (liberté totale des modes)"],
],
retenir:"Acte juridique > 1 500 € = écrit obligatoire (sauf entre commerçants). Fait juridique = preuve libre. Celui sur qui pèse la charge de la preuve PERD en cas de doute.",
leaves:["Acte vs fait juridique","Preuves parfaites","Preuve libre en commerce"]
}
},
{ id:"ch4", label:["CH.4","Organisation","judiciaire"], angle:92,
detail:{ title:"CH.4 – L'organisation judiciaire",
chips:["2 ordres","Compétence","Voies de recours","Juridictions"],
points:[
["2 ordres :","Judiciaire (TJ, TC, CPH → Cour de cassation) / Administratif (TA, CAA → Conseil d'État)"],
["TJ :","droit civil général. TC : litiges commerciaux. CPH : contrat de travail."],
["Pénal :","Tribunal de police (contraventions) / Correctionnel (délits) / Assises (crimes)"],
["Compétence matérielle :","nature du litige. Compétence territoriale : lieu du domicile défendeur."],
["Appel :","rejuge le fond. Délai 1 mois (civil) / 10 jours (pénal). Effet dévolutif."],
["Cassation :","contrôle la bonne application du droit, ne rejuge PAS les faits. Casse ou rejette."],
["CJUE :","interprète le droit de l'UE. CEDH : protège les droits fondamentaux (Convention EDH)."],
],
retenir:"Cour de cassation ≠ 3e degré. Elle ne rejuge pas les faits. CJUE = droit UE. CEDH = droits fondamentaux. Appel = 2nd degré qui rejuge tout.",
leaves:["Judiciaire vs administratif","Appel vs Cassation","Prescription & forclusion"]
}
},
{ id:"ch5", label:["CH.5","MARD"], angle:148,
detail:{ title:"CH.5 – Les Modes Alternatifs de Règlement des Différends",
chips:["Conciliation","Médiation","Arbitrage","Procédure participative"],
points:[
["MARD obligatoire :","depuis 2020, pour litiges civils ≤ 5 000 € et conflits de voisinage, MARD préalable requis"],
["Conciliation :","tiers neutre (bénévole) qui PROPOSE une solution. Gratuit. Conciliateur de justice."],
["Médiation :","tiers professionnel qui FACILITE le dialogue sans proposer de solution. Payant."],
["Accord homologué :","le juge lui confère force exécutoire → équivalent à un jugement"],
["Arbitrage :","arbitre(s) investi(s) du pouvoir de TRANCHER. Sentence arbitrale obligatoire."],
["Clause compromissoire :","insérée dans le contrat AVANT le litige pour prévoir l'arbitrage"],
["Exequatur :","ordonnance du TJ pour rendre la sentence arbitrale exécutoire de force"],
],
retenir:"Conciliation = propose. Médiation = facilite. Arbitrage = tranche. L'arbitrage est exclu pour les matières d'ordre public (pénal, état civil, nationalité).",
leaves:["Conciliation vs médiation","Arbitrage & sentence","Exequatur & recours"]
}
},
]
},
2: {
color: "#34d399", bg: "#1a4a3a",

label: ["THÈME 2", "Acteurs de la", "vie des affaires"],
branches: [
{ id:"ch6", label:["CH.6","Les","personnes"], angle:210,
detail:{ title:"CH.6 – Les personnes",
chips:["Personnes physiques","Personnes morales","Capacité","Protection"],
points:[
["Personnalité juridique :","aptitude à être titulaire de droits et débiteur d'obligations"],
["Naissance PP :","naissance vivant et viable (infans conceptus si intérêt pour l'enfant conçu)"],
["Capacité de jouissance :","avoir des droits. Toute personne en est dotée."],
["Capacité d'exercice :","exercer ses droits seul. Limitée pour mineurs et majeurs protégés."],
["Tutelle :","représentation totale du majeur incapable par le tuteur"],
["Curatelle :","assistance du majeur (il signe avec le curateur pour les actes importants)"],
["Sauvegarde de justice :","protection légère, actes rescindables pour lésion"],
["Personne morale :","naissance par immatriculation RCS (sociétés) ou déclaration préfecture (associations)"],
],
retenir:"La PM naît de l'immatriculation/déclaration. Avant : 'société en formation'. PM = principe de spécialité (activités limitées aux statuts).",
leaves:["Jouissance vs exercice","Tutelle Curatelle Sauvegarde","Personnes morales"]
}
},
{ id:"ch7", label:["CH.7","Le","commerçant"], angle:260,
detail:{ title:"CH.7 – Le commerçant et les professionnels",
chips:["Qualité de commerçant","Actes de commerce","Obligations","EI réforme 2022"],
points:[
["Commerçant :","accomplit des actes de commerce à titre de profession habituelle, en son nom et pour son compte"],
["Actes de commerce par nature :","achat pour revendre, banque, assurance, transport, industrie, spectacle..."],
["Actes par la forme :","lettre de change, sociétés commerciales (SARL, SA, SAS...)"],
["Obligations :","immatriculation RCS, tenue d'une comptabilité, compte bancaire professionnel"],
["Artisan :","activité manuelle qualifiée, immatriculation RNE. Actes civils par nature."],
["Professionnel libéral :","membre d'un ordre (avocat, médecin). Responsabilité civile professionnelle."],
["Réforme EI 2022 :","séparation AUTOMATIQUE patrimoine pro/perso pour toute entreprise individuelle. Fin de l'EIRL."],
],
retenir:"Depuis la loi du 14 fév. 2022 : tout entrepreneur individuel bénéficie AUTOMATIQUEMENT d'une séparation de patrimoine pro/perso. Plus besoin de créer une EIRL.",
leaves:["Actes de commerce","Obligations du commerçant","EI & réforme 2022"]
}
},
{ id:"ch8", label:["CH.8","Le","patrimoine"], angle:300,
detail:{ title:"CH.8 – La théorie du patrimoine",
chips:["Théorie classique","Composition","Gage général des créanciers"],
points:[
["Définition :","ensemble des droits et obligations d'une personne à valeur économique"],
["Caractères classiques :","unicité, indissociable de la personne, incessible entre vifs"],
["Actif :","droits réels (propriété, usufruit...), créances, droits intellectuels, fonds de commerce"],
["Passif :","dettes et obligations (emprunts, dommages et intérêts...)"],
["Art. 2284 C.civ. :","droit de gage général des créanciers sur TOUS les biens présents et à venir"],
["Droits extra-patrimoniaux :","droits de la personnalité, droits politiques, droits familiaux → incessibles, insaisissables"],
["Théorie d'affectation :","fiducie, fondation, fonds de dotation = patrimoine affecté à un but"],
],

retenir:"Art. 2284 : les créanciers peuvent saisir TOUS les biens du débiteur (présents et à venir). Limite depuis 2022 : séparation automatique pro/perso pour l'EI.",
leaves:["Actif / Passif","Droits réels vs créances","Gage général créanciers"]
}
},
{ id:"ch9", label:["CH.9","La","propriété"], angle:80,
detail:{ title:"CH.9 – La propriété",
chips:["3 attributs","Caractères","Acquisition","Démembrements"],
points:[
["3 attributs :","Usus (droit d'usage), Fructus (percevoir les fruits), Abusus (disposer, aliéner)"],
["Caractères :","absolu, exclusif, perpétuel, transmissible"],
["Art. 2276 :","'En fait de meubles, possession vaut titre' → acquisition immédiate de bonne foi"],
["Usucapion :","30 ans de possession pour acquérir un immeuble (10 ans avec titre + bonne foi)"],
["Usufruit :","droit d'utiliser la chose (usus) et d'en percevoir les fruits (fructus) sans en être propriétaire"],
["Nue-propriété :","le propriétaire 'nu' conserve l'abusus. Récupère la pleine propriété à l'extinction de l'usufruit."],
["Indivision :","plusieurs propriétaires sans délimitation. Actes de disposition = unanimité."],
],
retenir:"Usufruit = droit d'UTILISER et de PERCEVOIR les fruits, sans pouvoir disposer. Nu-propriétaire = propriétaire 'nu' qui attend l'extinction de l'usufruit pour retrouver la pleine propriété.",
leaves:["Usus Fructus Abusus","Usucapion & possession","Usufruit & indivision"]
}
},
{ id:"ch9b", label:["CH.9bis","Propriété","intellectuelle"], angle:145,
detail:{ title:"CH.9bis – La propriété intellectuelle",
chips:["Brevet","Marque","Droit d'auteur","Droits moraux vs patrimoniaux"],
points:[
["Brevet :","dépôt INPI obligatoire. Durée 20 ans non renouvelable. Conditions : nouveauté + activité inventive + application industrielle."],
["Domaine public :","après 20 ans, l'invention tombe dans le domaine public (libre utilisation)"],
["Invention salarié :","appartient à l'employeur si faite dans l'exercice des fonctions du salarié"],
["Marque :","dépôt INPI obligatoire. Durée 10 ans renouvelable indéfiniment. Doit être distinctive, licite, disponible."],
["Marque UE :","dépôt EUIPO = protection dans les 27 États membres en une seule procédure"],
["Droit d'auteur :","naissance AUTOMATIQUE dès la création (pas de dépôt). Durée vie + 70 ans."],
["Droits moraux :","perpétuels et INALIÉNABLES (paternité, divulgation, intégrité, droit de repentir)"],
["Droits patrimoniaux :","cessibles et transmissibles (ex : auteur cède à un éditeur). 70 ans post-mortem."],
],
retenir:"Brevet = dépôt obligatoire (INPI), 20 ans non renouvelable. Marque = dépôt obligatoire (INPI), 10 ans renouvelable. Droit d'auteur = AUTOMATIQUE, droits moraux INALIÉNABLES.",
leaves:["Brevet 20 ans INPI","Marque 10 ans renouvelable","Droit d'auteur automatique"]
}
},
]
},
3: {
color: "#fb923c", bg: "#4a2a10",
label: ["THÈME 3", "Les Contrats"],
branches: [
{ id:"ch10", label:["CH.10","Formation","du contrat"], angle:205,
detail:{ title:"CH.10 – Théorie générale et formation du contrat",
chips:["Classification","Principes","Conditions validité","Vices","Nullité"],
points:[

["Contrat :","accord de volontés destiné à créer/modifier/transmettre/éteindre des obligations (art. 1101)"],
["4 principes :","liberté contractuelle (1102), force obligatoire (1103), bonne foi (1104), effet relatif (1199)"],
["Conditions validité (art. 1128) :","consentement + capacité + contenu licite et certain"],
["Erreur :","porte sur les qualités essentielles de la prestation. Doit être excusable. → Nullité relative 5 ans."],
["Dol :","manœuvres frauduleuses intentionnelles + réticence dolosive. → Nullité relative + DI."],
["Violence :","contrainte illégitime et grave, inclut la dépendance économique exploitée. → Nullité relative + DI."],
["Nullité relative :","protège un intérêt particulier → seule la victime peut agir (5 ans)"],
["Nullité absolue :","contenu illicite → tout intéressé peut agir. Rétroactivité dans les deux cas."],
],
retenir:"Nullité relative = protège UN intérêt particulier (victime seule peut agir). Nullité absolue = protège l'ordre public (tout le monde peut agir). Toujours rétroactive → restitutions mutuelles.",
leaves:["Offre & acceptation","Vices du consentement","Nullité abs. vs relative"]
}
},
{ id:"ch11", label:["CH.11","Exécution","du contrat"], angle:258,
detail:{ title:"CH.11 – L'exécution des contrats",
chips:["Force obligatoire","Imprévision","5 remèdes","Résolution","Responsabilité"],
points:[
["Force obligatoire :","art. 1103 – 'le contrat est la loi des parties'"],
["Imprévision (art. 1195) :","changement imprévisible rendant l'exécution excessivement onéreuse → renégociation obligatoire"],
["5 remèdes (art. 1217) :","exception d'inexécution / exécution forcée / réduction du prix / résolution / dommages et intérêts"],
["3 voies de résolution :","clause résolutoire (auto) / résolution unilatérale notifiée (risques DI) / résolution judiciaire"],
["Responsabilité contractuelle :","inexécution + préjudice PRÉVISIBLE au moment de la conclusion + lien de causalité"],
["Obligation de résultat :","débiteur présumé fautif si résultat non atteint (transporteur, vendeur)"],
["Obligation de moyens :","créancier doit prouver la faute du débiteur (médecin, avocat)"],
["Force majeure :","extérieur + imprévisible + irrésistible → exonération totale"],
],
retenir:"Résolution unilatérale = risque pour le créancier (DI si injustifiée). Obligation de résultat = présomption de faute. Force majeure : 3 critères CUMULATIFS (extérieur + imprévisible + irrésistible).",
leaves:["5 remèdes inexécution","Résolution 3 voies","Résultat vs moyens"]
}
},
{ id:"ch12", label:["CH.12","Fonds de","commerce"], angle:308,
detail:{ title:"CH.12 – Le fonds de commerce et les contrats d'entreprise",
chips:["Composition","Bail commercial","Cession","Crédit-bail","Franchise"],
points:[
["Fonds de commerce :","ensemble de biens meubles affectés à une activité commerciale pour attirer et retenir la clientèle"],
["Éléments incorporels :","clientèle (ESSENTIEL), droit au bail, nom commercial, brevets/marques"],
["Éléments corporels :","matériel, outillage, marchandises (évalué séparément)"],
["Bail commercial :","durée 9 ans min. Congé triennal. Droit au renouvellement (refus = indemnité d'éviction)"],
["Cession du fonds :","mentions obligatoires (art. L141-1), publication JAL + BODACC, séquestre 10 jours"],
["Crédit-bail :","location avec option d'achat. Loyers déductibles fiscalement. 3 options à terme."],
["Franchise :","DIP remis 20 jours avant signature. Savoir-faire secret, substantiel, identifié."],
],
retenir:"Sans clientèle = pas de fonds de commerce. Le droit au bail est l'élément le plus précieux. DIP franchise = 20 jours AVANT signature ou tout versement de fonds.",
leaves:["Éléments du fonds","Bail commercial 9 ans","Franchise & crédit-bail"]
}
},
{ id:"ch13", label:["CH.13","Vente &","Consommation"], angle:92,

detail:{ title:"CH.13 – Le contrat de vente et les contrats de consommation",
chips:["Vente","Garanties vendeur","Droit conso.","Rétractation 14j","Conformité"],
points:[
["Vente :","transfert de propriété solo consensu (au seul accord des parties). Transfert des risques suit."],
["Réserve de propriété :","vendeur reste propriétaire jusqu'au paiement intégral. Efficace en procédure collective."],
["Garantie vices cachés :","défauts cachés antérieurs rendant la chose impropre. 2 ans à compter de la DÉCOUVERTE."],
["Action rédhibitoire :","résolution du contrat. Action estimatoire : réduction du prix."],
["Droit de rétractation :","14 jours pour ventes à distance et hors établissement, sans motif. 12 mois si pas d'info."],
["Garantie légale de conformité :","2 ans biens neufs / 1 an occasion. Présomption d'antériorité 24 mois (réforme 2022)."],
["Clauses abusives :","déséquilibre significatif entre pro et consommateur → réputées non écrites"],
],
retenir:"Garantie vices cachés = 2 ans à compter de la DÉCOUVERTE. Garantie légale de conformité = 2 ans biens neufs, présomption d'antériorité 24 mois depuis 2022. Rétractation = 14 jours.",
leaves:["Garantie vices cachés","Droit rétractation 14j","Garantie légale conformité"]
}
},
{ id:"ch14", label:["CH.14","Banque","& Sûretés"], angle:148,
detail:{ title:"CH.14 – Les contrats bancaires et les sûretés",
chips:["Crédits bancaires","Effets de commerce","Sûretés personnelles","Sûretés réelles"],
points:[
["Escompte :","banque achète la traite avant échéance → client payé immédiatement. Recours cambiaire si impayé."],
["Affacturage :","factor rachète créances + recouvre + avance les fonds. Commission + retenue de garantie."],
["Lettre de change :","tireur ordonne au tiré de payer le porteur à l'échéance. Escomptable. Aval possible."],
["Cautionnement simple :","bénéfice de discussion + de division. Mention manuscrite OBLIGATOIRE (art. 2297)."],
["Cautionnement solidaire :","aucun bénéfice. Créancier peut poursuivre directement la caution."],
["Garantie autonome :","paiement sur simple demande sans opposer d'exception. Plus forte que le cautionnement."],
["Hypothèque :","immeuble en garantie sans dépossession. Droit de suite et de préférence."],
["Nantissement :","meuble INCORPOREL en garantie (parts sociales, fonds de commerce, créances, brevet)."],
],
retenir:"Cautionnement solidaire = caution directement poursuivable. Garantie autonome = encore plus forte (paiement immédiat sur 1re demande). Nantissement = meuble INCORPOREL (≠ gage = corporel).",
leaves:["Escompte & affacturage","Cautionnement simple/solidaire","Hypothèque & nantissement"]
}
},
]
},
5: {
color: "#f472b6", bg: "#4a1530",
label: ["THÈME 5", "Responsabilités", "de l'entreprise"],
branches: [
{ id:"r1", label:["Resp. civile","extracontrac-","tuelle"], angle:210,
detail:{ title:"Responsabilité civile extracontractuelle (délictuelle)",
chips:["Art. 1240","Fait personnel","Fait d'autrui","Fait des choses","Produits défectueux"],
points:[
["3 conditions :","faute (ou fait générateur) + préjudice certain/direct/personnel + lien de causalité"],
["Faute intentionnelle :","art. 1240. Faute par négligence/imprudence : art. 1241."],
["Préjudice :","corporel, matériel, moral ou économique. Doit être certain, direct, personnel."],
["Fait du préposé :","l'employeur (commettant) répond du fait de son employé. Présomption irréfragable."],
["Fait des enfants :","parents répondent des faits de leurs enfants mineurs cohabitants"],

["Fait des choses :","gardien responsable sans faute prouvée. Chose doit avoir joué un rôle actif."],
["Produits défectueux :","responsabilité du producteur sans faute (art. 1245). Bien d'usage privé."],
["Exonération :","force majeure (totale), fait de la victime (partielle ou totale), fait d'un tiers"],
],
retenir:"Responsabilité du fait des choses = pas besoin de prouver une faute du gardien. La chose doit avoir joué un rôle ACTIF (instrument du dommage). Prescription : 5 ans.",
leaves:["Faute préjudice causalité","Fait d'autrui","Fait des choses"]
}
},
{ id:"r2", label:["Resp. civile","contrac-","tuelle"], angle:265,
detail:{ title:"Responsabilité civile contractuelle",
chips:["Art. 1231-1","Conditions","Résultat vs Moyens","Réparation","Option prohibée"],
points:[
["Conditions :","inexécution contractuelle + préjudice PRÉVISIBLE au moment de la conclusion + lien de causalité"],
["Mise en demeure :","nécessaire préalablement (sauf urgence ou clause contraire)"],
["Obligation de résultat :","débiteur présumé responsable si résultat non atteint. Créancier prouve juste l'absence de résultat."],
["Obligation de moyens :","créancier doit prouver que le débiteur n'a pas mis en œuvre les moyens nécessaires"],
["Exemples résultat :","transporteur, vendeur, chirurgien esthétique, employeur (sécurité)"],
["Exemples moyens :","médecin (soins), avocat (conseil), architecte (conseil)"],
["Option prohibée :","si contrat → responsabilité contractuelle obligatoire. On ne peut pas choisir entre les deux."],
["DI compensatoires :","réparent l'inexécution. DI moratoires : réparent le retard (intérêts légaux)."],
],
retenir:"Le préjudice contractuel doit être PRÉVISIBLE à la conclusion (≠ extracontractuel = tout dommage). Option prohibée : présence d'un contrat = impossible de choisir la responsabilité délictuelle.",
leaves:["Inexécution + prévisibilité","Résultat vs moyens","Force majeure"]
}
},
{ id:"r3", label:["Resp.","pénale"], angle:325,
detail:{ title:"Responsabilité pénale",
chips:["Infractions","3 éléments constitutifs","PM pénalement responsable","Irresponsabilité"],
points:[
["Principes :","légalité des délits et peines, personnalité des peines, présomption d'innocence, non bis in idem"],
["Élément légal :","l'infraction doit être prévue par un texte. Interprétation STRICTE de la loi pénale."],
["Élément matériel :","acte ou omission réprimée. Peut être tentée (commencement + désistement involontaire)."],
["Élément moral :","faute intentionnelle (conscience + volonté). Pour contraventions : faute non intentionnelle suffit."],
["Contravention :","tribunal de police → amende ≤ 3 000 €. Prescription : 1 an."],
["Délit :","tribunal correctionnel → prison < 10 ans + amende. Prescription : 6 ans. Ex : ABS, vol, escroquerie."],
["Crime :","cour d'assises → réclusion jusqu'à perpétuité. Prescription : 20 ans."],
["PM pénale :","art. 121-2 – infraction par ses organes ou représentants pour son compte. Cumul avec la PP."],
],
retenir:"ABS (abus de biens sociaux) = utilisation des biens d'une société à des fins personnelles, sciemment, contrairement à l'intérêt social. Délit pénal + civil. Prescription 6 ans.",
leaves:["3 éléments constitutifs","Contravention Délit Crime","PM pénalement responsable"]
}
},
{ id:"r4", label:["Comparatif","Civil","vs Pénal"], angle:95,
detail:{ title:"Comparatif civil / pénal",
chips:["Objectif","Qui agit ?","Sanction","Juridiction","Cumul","Prescription"],
points:[
["Civil :","RÉPARER le préjudice de la victime → dommages et intérêts versés à la victime"],

["Pénal :","SANCTIONNER un comportement contraire à l'ordre social → amende, prison, peines complémentaires"],
["Qui agit ? Civil :","la victime (demandeur). Pénal : le parquet (au nom de la société). Victime = partie civile."],
["Juridictions civiles :","TJ, CPH, TC selon la nature du litige"],
["Juridictions pénales :","tribunal de police (contraventions), correctionnel (délits), cour d'assises (crimes)"],
["Cumul :","un même fait peut engager les DEUX responsabilités simultanément"],
["Relaxe pénale :","n'empêche pas une condamnation civile si le dommage est prouvé"],
["Prescription :","civil = 5 ans. Pénal : 1 an (contravention), 6 ans (délit), 20 ans (crime)."],
],
retenir:"Les deux responsabilités sont INDÉPENDANTES et CUMULABLES. Acquitté pénalement ≠ exonéré civilement. La faute pénale non intentionnelle peut suffire à engager la responsabilité civile.",
leaves:["Civil = réparer / Pénal = punir","Qui agit ? Quelle juridiction ?","Cumul & prescription"]
}
},
]
}
};
function polarToXY(cx, cy, r, angleDeg) {
const rad = (angleDeg * Math.PI) / 180;
return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}
function MindMapSVG({ theme, color, onSelect, selected }) {
const W = 1000, H = 800, CX = 500, CY = 390;
return (
<svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxHeight: 800, display: "block" }}>
<defs>
<filter id={`glow${theme.color.replace('#','')}`}>
<feGaussianBlur stdDeviation="3" result="blur"/>
<feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
</filter>
</defs>
{/* Center node */}
<circle cx={CX} cy={CY} r={72} fill={color} opacity={0.13}/>
<circle cx={CX} cy={CY} r={66} fill="none" stroke={color} strokeWidth={2} opacity={0.5}/>
{theme.label.map((line, i) => (
<text key={i} x={CX} y={CY - (theme.label.length - 1) * 9 + i * 18}
textAnchor="middle" dominantBaseline="central"
fill={color} fontSize={i === 0 ? 13 : 11} fontWeight="700"
fontFamily="Georgia, serif">
{line}
</text>
))}
{theme.branches.map((branch) => {
const bp = polarToXY(CX, CY, 210, branch.angle);
const isSelected = selected === branch.id;

return (
<g key={branch.id}>
{/* connector */}
<line x1={CX} y1={CY} x2={bp.x} y2={bp.y}
stroke={color} strokeWidth={isSelected ? 2.5 : 1.5}
opacity={isSelected ? 0.8 : 0.3} strokeDasharray={isSelected ? "none" : "5 4"}/>
{/* leaves */}
{branch.detail.leaves.map((leafLabel, li) => {
const lc = branch.detail.leaves.length;
const spread = 50;
const off = (li - (lc - 1) / 2) * spread;
const lp = polarToXY(bp.x, bp.y, 130, branch.angle + off);
return (
<g key={li} onClick={() => onSelect(branch.id)}
style={{ cursor: "pointer" }}>
<line x1={bp.x} y1={bp.y} x2={lp.x} y2={lp.y}
stroke={color} strokeWidth={1} opacity={0.2}/>
<rect x={lp.x - 52} y={lp.y - 22} width={104} height={44}
rx={8} fill="#0f172a" stroke={color}
strokeWidth={isSelected ? 1.5 : 0.8} opacity={isSelected ? 1 : 0.7}/>
{leafLabel.split(" ").slice(0, 3).map((word, wi, arr) => (
<text key={wi} x={lp.x}
y={lp.y - (arr.length - 1) * 6.5 + wi * 13}
textAnchor="middle" dominantBaseline="central"
fill={color} fontSize={9.5} fontWeight="500"
fontFamily="Georgia, serif" opacity={0.85}>
{word}
</text>
))}
</g>
);
})}
{/* branch node */}
<g onClick={() => onSelect(branch.id)} style={{ cursor: "pointer" }}>
<rect x={bp.x - 58} y={bp.y - 32} width={116} height={64}
rx={12}
fill={isSelected ? color : `${color}22`}
stroke={color} strokeWidth={isSelected ? 2.5 : 1.5}
filter={isSelected ? `url(#glow${color.replace('#','')})` : undefined}/>
{branch.label.map((line, i) => (
<text key={i} x={bp.x}
y={bp.y - (branch.label.length - 1) * 8.5 + i * 17}
textAnchor="middle" dominantBaseline="central"
fill={isSelected ? "#0f172a" : "#fff"}
fontSize={i === 0 ? 11 : 10} fontWeight="700"

fontFamily="Georgia, serif">
{line}
</text>
))}
</g>
</g>
);
})}
</svg>
);
}
function DetailPanel({ branch, color }) {
if (!branch) return (
<div style={{ textAlign: "center", color: "#64748b", padding: "32px 0", fontSize: 14, fontStyle: "italic" }}>
Clique sur un chapitre pour voir le détail
</div>
);
const { detail } = branch;
return (
<div style={{ animation: "fadeIn .25s ease" }}>
<h3 style={{ color, fontFamily: "Georgia, serif", fontSize: 18, marginBottom: 12 }}>{detail.title}</h3>
<div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
{detail.chips.map(c => (
<span key={c} style={{ padding: "4px 12px", borderRadius: 100, fontSize: 11, fontWeight: 600,
background: `${color}18`, color, border: `1px solid ${color}44` }}>{c}</span>
))}
</div>
<ul style={{ listStyle: "none", padding: 0 }}>
{detail.points.map(([label, text], i) => (
<li key={i} style={{ padding: "8px 0 8px 18px", borderBottom: "1px solid rgba(255,255,255,.05)",
fontSize: 13, color: "#cbd5e1", lineHeight: 1.6, position: "relative" }}>
<span style={{ position: "absolute", left: 0, color: "#475569" }}>→</span>
<strong style={{ color: "#e2e8f0" }}>{label}</strong> {text}
</li>
))}
</ul>
{detail.retenir && (
<div style={{ marginTop: 14, padding: "12px 16px", borderRadius: 10,
background: `${color}15`, borderLeft: `4px solid ${color}`,
fontSize: 13, color: "#e2e8f0", lineHeight: 1.6 }}>
{detail.retenir}
</div>
)}
</div>
);
}

export default function App() {
const [activeTheme, setActiveTheme] = useState(1);
const [selected, setSelected] = useState(null);
const theme = THEMES[activeTheme];
const selectedBranch = theme.branches.find(b => b.id === selected);
function handleSelect(id) {
setSelected(prev => prev === id ? null : id);
}
function switchTheme(id) {
setActiveTheme(id);
setSelected(null);
}
const tabs = [
{ id: 1, label: "Thème 1 · Règle juridique", color: "#60a5fa" },
{ id: 2, label: "Thème 2 · Acteurs", color: "#34d399" },
{ id: 3, label: "Thème 3 · Contrats", color: "#fb923c" },
{ id: 5, label: "Thème 5 · Responsabilités", color: "#f472b6" },
];
return (
<div style={{ background: "#0b0f1a", minHeight: "100vh", color: "#e2e8f0",
fontFamily: "'DM Sans', Georgia, sans-serif" }}>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
`}</style>
{/* Header */}
<div style={{ textAlign: "center", padding: "36px 16px 20px" }}>
<div style={{ display: "inline-block", background: "rgba(96,165,250,.12)",
border: "1px solid rgba(96,165,250,.3)", color: "#60a5fa",
fontSize: 11, fontWeight: 700, letterSpacing: ".1em",
textTransform: "uppercase", padding: "4px 14px", borderRadius: 100, marginBottom: 14 }}>
DCG · 1re Année · Droit
</div>
<h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(24px, 4vw, 42px)",
fontWeight: 900, marginBottom: 8, letterSpacing: "-.02em" }}>
Cartes Mentales
</h1>
<p style={{ color: "#64748b", fontSize: 14 }}>Clique sur un chapitre pour voir le détail</p>
</div>

{/* Tabs */}
<div style={{ display: "flex", gap: 8, justifyContent: "center", padding: "0 16px 24px", flexWrap: "wrap" }}>
{tabs.map(t => (
<button key={t.id} onClick={() => switchTheme(t.id)}
style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 20px",
borderRadius: 100, border: `1.5px solid ${activeTheme === t.id ? t.color : "#1e293b"}`,
background: activeTheme === t.id ? `${t.color}18` : "#131929",
color: activeTheme === t.id ? t.color : "#64748b",
fontFamily: "inherit", fontSize: 13, fontWeight: 600, cursor: "pointer",
transition: "all .2s" }}>
<span style={{ width: 7, height: 7, borderRadius: "50%", background: t.color }}/>
{t.label}
</button>
))}
</div>
{/* Map + Detail */}
<div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 16px 48px" }}>
<div style={{ background: "#111827", border: "1px solid #1e293b",
borderRadius: 20, padding: 16, marginBottom: 16 }}>
<MindMapSVG theme={theme} color={theme.color}
onSelect={handleSelect} selected={selected}/>
</div>
<div style={{ background: "#111827", border: "1px solid #1e293b",
borderRadius: 16, padding: "24px 28px", minHeight: 100 }}>
<DetailPanel branch={selectedBranch} color={theme.color}/>
</div>
</div>
</div>
);
}