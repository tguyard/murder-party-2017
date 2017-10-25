import { Injectable } from '@angular/core';
import { User, UserService } from './users.service';
import * as md5 from 'md5';

export type Words = string[];

export class Fragment {
  public words: [Words];
  public id: string;
  public isOpened = false;


  constructor(
    public user: User,
    w1: Words,
    public title: string,
    public details: string,
    public order = 0,
    public word2: Words|null = null,
  ) {
    this.words = [w1];
    this.id = md5(w1[0] + order + user.name);
  }
}


@Injectable()
export class FragmentService {

  public fragments: Fragment[] = [];

  constructor(userService: UserService) {
/* tslint:disable */

// WARNING: <p>internat, convoqué voyante missing</p>

this.fragments.push(new Fragment(userService.chef,
      ["diamant","diamants","diament","diaments"],
      `Afrique du sud, Mine de diamant - 1919 - Promenade`,
      `<p>Je marche tranquillement aux abords de ma <strong class="mc">mine&nbsp;à ciel ouvert. Il fait extrêmement chaud, je ne sais pas si j’ai choisi le bon moment pour me promener.</p>
`, 1));
this.fragments.push(new Fragment(userService.chef,
      ["caillou","pierre"],
      `Afrique du sud, Mine de diamant - 1919 - Aggression`,
      `<p>J’entend des cris diffus, je me mets à trottiner pour aller voir ce qu’il se passe. En arrivant sur le surplomb je vois <strong class="people">CONTREMAITRE en train de frapper un <strong class="mc">mineur&nbsp;noir (<strong class="people">ESCLAVE). Ce dernier gît dans une marre de <strong class="mc">sang.</p>
<p>Je commence à descendre prudemment la pente pour intervenir quand un autre <strong class="mc">mineur&nbsp;(<strong class="people">SOLDAT) arrive en courant et envoie <strong class="people">CONTREMAITRE au sol.</p>
<p>Je continue ma descente alors que <strong class="people">SOLDAT aide <strong class="people">ESCLAVE à se relever.</p>
<p>Arrivé sur un surplomb au dessus de la scène, je cris &nbsp;:</p>
<p>“- Quel est votre nom ?”</p>
`, 2));
this.fragments.push(new Fragment(userService.chef,
      ["mine"],
      `Afrique du sud, Mine de diamant - 1919 - Maurice`,
      `<p>Ça toque à la porte puis <strong class="people">SOLDAT arrive dans le bureau, le poignet bandé. Je lui indique le fauteuil en face de moi et il s’assoit.</p>
<p>“- <strong class="mc">Maurice, savez-vous ce que vous risquez à frapper un de mes contremaître ?”</p>
<p>“- Oui …”</p>
<p>“- Vous avez fait preuve de courage, j’ai assisté à votre intervention et vous avez bien fait. Ce contremaître n’a pas à battre mes employés à mort sous prétexte qu’ils sont noirs.”</p>
<p>“- Euh … merci …”</p>
<p>“- Vous semblez savoir bien vous battre. Vous avez fait la guerre ?”</p>
<p>“- Oui, j’étais artificier. J’ai combattu à <strong class="mc">verdun&nbsp;et j’ai reçu la croix de guerre. Après la guerre j’ai décidé de venir en <strong class="mc">Afrique du Sud mais ce n’est pas si facile de trouver un boulot. Je suis plutôt chanceux de travailler dans votre <strong class="mc">mine.”</p>
<p>Je le regarde. Dans quel monde nous nous trouvons pour qu’un heros de guerre, avec des valeurs, se retrouve <strong class="mc">mineur… Je lui dit :</p>
<p>“- Vous n’êtes pas fait pour être <strong class="mc">mineur, que diriez vous de devenir mon majordome ? J’ai pas mal de tâche à vous confier.”</p>
`, 3, ["sang"]));
this.fragments.push(new Fragment(userService.chef,
      ["maria"],
      `Zurich, Entrepôt en banlieu - 1927 `,
      `<p>Un léger bruit, la porte s'entrouvre et une lueur de lanterne projette des ombres dans la pénombre de l'entrepôt. Je jubile, après tant de temps mon investigation va porter ses fruits.</p>
<p>“- ça y est, on les tient !” je chuchote</p>
<p>“- ils sont en avance on dirait” répond <strong class="people">SOLDAT</p>
<p>La lanterne s’avance dans l'entrepôt, aucun bruit de pas ne semble provenir de son porteur. J’espère qu’il ne seront pas armé, je préfèrerais résoudre ça pacifiquement.</p>
<p>Je réalise que la lanterne vient droit vers notre planque. <strong class="people">SOLDAT semble aussi l’avoir remarqué et je le sens tendu. Je pose ma main sur son bras pour éviter qu’il brandisse son fusil. Pas tout de suite.</p>
<p>“- attends encore un peu” je suis murmure à l’oreille.</p>
<p>La lumière arrête de bouger à quelque mètres devant nous et j'aperçois 2 yeux brillants légèrement au dessus.</p>
<p>Soudain un rire féminin résonne dans l'entrepôt.</p>
<p>“- si vous voulez les voir, vous ne regardez pas dans la bonne direction messieurs <strong class="mc">Pollack et Genevoix !” dit la forme</p>
<p>Je suis atterré. Nous avons donc été démasqué et traqués. Pris à notre propre piège … Mais je veux savoir la vérité. Je me lève et m’avance vers la dame. Je le suis et j'aperçois pour la 1er fois, dans la lueur de la lampe, le beau visage de <strong class="people">AGENT. Elle est magnifique et mélanger une fragilité et une présence.</p>
<p>“- Qui êtes vous ?“ Je lui demande doucement</p>
<p>“- Peu importe. Mais je dois dire que je suis impressionné par votre travaille d’enquête. Sans vous pister je ne crois pas que j’aurais pu trouver le <strong class="mc">portail seule. Mais il est temps d’intervenir, vous allez avoir besoin de mon aide.”</p>
<p>Elle n’est donc pas notre ennemie. Mais tout ce semble mystérieux. Je ne vois pas de <strong class="mc">portail. Je lui demande :</p>
<p>“- De quoi parlez vous ? Qu’est-ce que vient faire ici cette histoire de <strong class="mc">portail ? Vous aussi vous enquêtez sur la filière clandestine d’importation de <strong class="mc">diamant. La transaction devrait avoir lieu ici d’un moment à l’autre ! D'ailleurs éteignez cette lumière et venez vous cacher avec nous !</p>
<p>“- Oh, me cacher comme une humaine ... pourquoi pas” lâcha t-elle avec un petit rire séduisant ”laissez moi juste régler un “détail”, il reste encore 15 bonnes minute avant leur arrivée.”</p>
<p><strong class="people">AGENT marche tranquillement vers le mur opposé à la porte de l'entrepôt posa un sac en toile sous une table près d’un bassin remplis d’eau croupi et de tas de détritus. Elle recouvre le sac d’un vieux carton qui traînait et revient vers nous avec toujours autant d’énergie. <strong class="people">SOLDAT demande :</p>
<p>“- qu’est ce que c’est ?”</p>
<p>“- oh, vous les verrez bien assez vite. Venez vous planquer ici” dit elle en indiquant un recoin en vu du carton.</p>
<p>Nous nous installons et <strong class="people">AGENT éteint sa lampe. Le silence revient, seuls les rats vient parfois le perturber. L’obscurité s’éclaircit à mesure que mes pupilles se remettent de l’éclaire de la lanterne, mon regard se père des les superbeux yeux de <strong class="people">AGENT. Sa beauté, son assurance en ce lieu et ses yeux qui brillent encore légèrement … Et comment nous a t elle trouvé. Je me suis planté sur toute la ligne ? Au moment ou je vais commencer à parler, <strong class="people">AGENT prend la parole et me dit :</p>
<p>“- votre analyse était vraiment bonne, Harry. Il y a bien une source croissante de <strong class="mc">diamant injecté sur le marché. Cette source vient bien de <strong class="mc">Zurich&nbsp;et plus particulièrement cet entrepôt, mais vous vous trompez sur la source réel, ces <strong class="mc">diamants ne viennent pas d’une <strong class="mc">mine concurrente. En fait ils ne viennent pas de ce <strong class="mc">plan … mais d’un autre <strong class="mc">plan. Les Hadinos perturbe l’économie terrienne en totale violation des traités de neutralité de ce <strong class="mc">plan. Bref, il fallait agir et vous tombez bien.”</p>
<p>Elle s'arrête, regarde le carton attentivement et regarde <strong class="people">SOLDAT :</p>
<p>“- Ils vont arriver, vous pouvez me rendre un service ?”</p>
<p>“- Heu, je suppose” répond-il</p>
<p>Elle sort un petit boitier de sa poche et je ne peux pas m'empêcher d’éprouver une pointe de jalousie quand elle le passe à <strong class="people">SOLDAT. Elle lui dit :</p>
<p>“- Prenez ça. Quand ils seront rentrés, tous les 3, appuyez sur le bouton.”</p>
<p><strong class="people">SOLDAT prend l'objet précautionneusement puis nous reportons notre attention vers le carton. 30 secondes plus tard, un flash blanc laisse place à une sorte de voile irisé &nbsp;circulaire à 2 mètre du carton. 3 créatures plates et translucide en sort.</p>
<p>Soudain une énorme <strong class="mc">explosion.</p>
<p>Je me réveille dans les bras dans <strong class="people">SOLDAT. Je n’ai pas dû perdre connaissance longtemps. <strong class="people">AGENT s’avance vers le nuage de poussière en allumant sa lampe.</p>
<p><strong class="people">SOLDAT m’aide à me lever et nous suivons <strong class="people">AGENT.</p>
<p>La poussière retombe peu à peu. Le <strong class="mc">portail a disparu. Les 3 créatures ont pris de la hauteur, des membres sont apparus et ils commencent à ressembler à des humanoïdes.</p>
<p><strong class="people">AGENT engage la conversation avec eux dans une langue inconnue. Après quelques minutes de conversation aux intonations étonnantes, <strong class="people">AGENT se tourne vers nous et dit</p>
<p>“- Félicitation messieurs, vous venez d'arrêter vos premiers planaires !</p>
`, 4));
this.fragments.push(new Fragment(userService.chef,
      ["kagana"],
      `Londres, Colloque d’archéologie - 1929`,
      `<p>C’est tout simplement fabuleux ! Cette femme (<strong class="people">ERUDIT) a non seulement mis la main sur un texte planaire mais elle a en plus réussi à le traduire partiellement avec une seule page !</p>
<p>Je continue à écouter la conférence, elle semble avoir remarqué que son auditoire ne la prenait pas au sérieux vu son air dépité. Je l’a trouve mignonne d’ailleurs. Tiens, <strong class="people">SOLDAT n’a pas réussi à camoufler son sommeil bien longtemps.</p>
<p>La conférence se termine, les applaudissements sont timides. Je me lève et descend vers l’estrade pour aller parler à <strong class="people">ERUDIT avant qu’elle s’en aille.</p>
<p>Arrivé au pied de l’estrade je jette un oeil derrière moi. C’est bon, <strong class="people">SOLDAT m’a suivi et tout le monde se dirige bien vers la sortie, pas question qu’on nous entend parler de planaires ici. Je m’avance prudement vers <strong class="people">ERUDIT et l’aborde :</p>
<p>“- Mademoiselle Broom, bravo pour votre exposé, votre analyse linguistique de ce document est remarquable !”</p>
<p><strong class="people">ERUDIT lève la tête et me fixe quelques instant, l’air intrigué :</p>
<p>“- vous vous moquez de moi, vous aussi ?“</p>
<p>“- non, pas le moins de monde mademoiselle. Mais je crois que votre auditoire n’était pas prêt à recevoir votre message et je crois que vous être passé pour une mystique.”</p>
<p><strong class="people">ERUDIT grimaçe. Je la coupe avant qu’elle ne se fache :</p>
<p>“- ce document en <strong class="mc">Kagana, comme vous l’appelez, est-ce le seul que vous possédez ? Où l’avez vous trouvé ?”</p>
<p>“- hum, c’est compliqué … Et pourquoi je devrais vous faire confiance ?”</p>
<p>Je lui sourit et cherche le carnet écrit en planaire planaire dans ma sacoche et je lui tend. Celle-ci le pris, et le parcours, de plus en plus frénétiquement alors que son visage transpire l’émerveillement.</p>
<p>“- c’est fabuleux, c’est &nbsp;un livre entier en <strong class="mc">Kagana !</p>
<p>“- pensez-vous <strong class="mc">pouvoir m’aider à le traduire ?”</p>
<p>“- vu le nombre de page, ça devrait devenir bien plus facile de déduire la grammaire qu’avec ma page ! Il me faudra un peu de temps ... mais oui ! Ou l’avez-vous trouvé ?”</p>
<p>J’entend du bruit derrière moi. La salle commence à se remplir pour la prochaine conférence. Je répond à <strong class="people">ERUDIT :</p>
<p>“- la prochain conférence ne va pas tarder à commencer, cela vous dirait d’aller prendre un café pour parler de tout ça ?”</p>
`, 5));
this.fragments.push(new Fragment(userService.chef,
      ["portail","portaille","porteil"],
      `Afrique du sud, Site de fouille - Août 1931 - Ravitaillement`,
      `<p>Je rentre dans la <strong class="mc">grotte&nbsp;éclairée par quelques projecteurs. Comme d’habitude <strong class="people">ERUDIT est assise au sol devant le mur ouest, en train de griffoner sur son cahier. En m’approchant, je m'aperçois que certains glyphes&nbsp;gravés dans la parois brillent.</p>
<p><strong class="people">ERUDIT a dû m’entendre puisque quelle se met à parler :</p>
<p>“- Comme je m’y attendais, ce ne sont pas des simples écrits. Il s’agit bien de textes planaires. Du <strong class="mc">plan des 5 lunes je pense. J’ai réussi à débloquer la première sécurité et j’ai accès à bien plus d’informations. Ce mur n’est que la couverture d’un livre. C’est étrange je reçois une partie de l’informations directement dans ma tête sous forme de couleurs et de sons étrange.”</p>
`, 6));
this.fragments.push(new Fragment(userService.chef,
      ["bague","anneaux","bagues"],
      `Afrique du sud, Site de fouille - Août 1931 - Bague`,
      `<p>Je pose le panier sur la petite table au centre de la <strong class="mc">grotte et demande :</p>
<p>“- Et tu arrives à décoder des choses ? Tu as trouvé le moyen de créer des portails ?”</p>
<p>Elle se lève, se retourne et s’approche de moi en souriant. Elle m’embrasse puis s’assoit à table.</p>
<p>“- Non, mais, il y a des informations très intéressantes sur les textes magiques. Apparemment certains livres peuvent voir leur contenu dépendre du lien entre les plans. Si le lien est coupé, le livre peut perdre une partie de son essence.”</p>
<p>“- Oh ! “ Je répond. “Tu penses que ça peut expliquer les livres incohérents que je te ramènes de <strong class="mc">mission ?”</p>
<p>“- Oui, je pense que c’est la cause. La prochaine fois j’aimerais t’accompagner à une <strong class="mc">mission d’<strong class="mc">infiltration&nbsp;pour essayer de traduire des documents avant que le <strong class="mc">portail soit détruit et le lien soit coupé.”</p>
<p>Nous mangeons en discutant. À la fin du repas, je sors la petite boite contenant l’alliance et je la pose devant <strong class="people">ERUDIT. Elle ne dit rien, et se contente de m’embrasser.</p>
`, 7));
this.fragments.push(new Fragment(userService.chef,
      ["mariage","marriage"],
      `France, Eglise - Mai 1932`,
      `<p><strong class="people">ERUDIT s’avance vers moi au bras de <strong class="people">SOLDAT. Elle a perdu son père et elle lui a demandé à <strong class="people">SOLDAT de la conduire à moi devant l’autel. Elle est vraiment belle dans cette robe. J’espère que <strong class="people">SOLDAT aura pensé aux alliances. Vu son regard, je crois qu’il a deviné à quoi je pense.</p>
`, 8));
this.fragments.push(new Fragment(userService.chef,
      ["dahona"],
      `Paris, Bords de Seine - 27 septembre 1936`,
      `<p>J’arrive au lieu de rendez vous. Il fait nuit et je ne vois personne. Soudain, j’entend une présence dans ma tête. Je sens des instructions, je me tourne à gauche, je vois un <strong class="mc">portail contre le mur. On me demande de l’emprunter, je m'exécute.</p>
<p>J’ai déjà eu l’occasion de traverser quelques portails mais il est difficile de s’y habituer. L’impression de se réveiller avec le sentiment que l’on a jamais existé avant, les oreilles qui font mal ou qui se débouche, le froid ou la chaleur qui survient.</p>
<p>Après quelques seconde je me rend compte que je suis dans un bureau, une forme est derrière. Mon contact je suppose. Je m’assois en face de lui et dit :</p>
<p>“- Bonsoir, j’ai bien reçu votre proposition de <strong class="mc">mission, que se passe t-il pour prendre de tel risque pour se rencontrer plutôt que passer par les moyens traditionnels ?”</p>
<p>La créature m’observe puis prend la parole :”</p>
<p>“- La <strong class="mc">mission que j’ai à vous confier est urgente et difficile. Mais je n’ai personne d’autre sous la main et vous connaissez les règles de neutralité ?”</p>
<p>“- Oui, les planaires ne doivent pas intervenir sur Terre. Enfin, pas directement”</p>
<p>“- Exactement, les <strong class="mc">Dahona sont installés depuis quelques années au châteaux de <strong class="mc">Martinvast, en France. Pendant longtemps ils se tenaient à la limite des règles et ont formé un vaste réseau d'influence. Nos informations nous ont livrés des indices qui portent à croire que tout était prémédité et qu’ils s'apprête à commettre un <strong class="mc">attentat.”</p>
<p>Le briefing continue pendant plusieurs heures. La <strong class="mc">mission sera presque suicidaire, tout problème conduira à la mort du <strong class="mc">commando. Une fois rentré dans le château, avec une bombe et la <strong class="mc">mémoire effacé, nous devons placer la bombe et l’a faire exploser à une heure précise. Le but est de casser le lien entre le moment de l’ouverture du <strong class="mc">portail et la venu du roi des <strong class="mc">Dahona. Les détails s’accumule, certains m’arrivent directement par la pensée. Parfois mon contact semble paniqué, ce n’est pas rassurant.</p>
<p>Le briefing prend fin. Mon contact me remercie et me dit qu’il me contactera pour donner les derniers détails. Un <strong class="mc">portail de retour s’ouvre, je l’emprunte.</p>
`, 9, ["pouvoir"]));
this.fragments.push(new Fragment(userService.chef,
      ["roberta","pollack"],
      `Versailles, Jardin - 28 septembre 1936 - Arrivée`,
      `<p>“- Il est là” dit <strong class="people">ERUDIT</p>
<p>Je me retourne et je vois <strong class="people">SOLDAT que arrive enfin pour la réunion. J’attend qu’il s’approche et je commence :</p>
<p>“- comme vous vous en doutez, on a une nouvelle <strong class="mc">mission. Mais celle là a l’air particulièrement délicate est dangereuse.”</p>
<p>“- Vous étiez donc à nouveau auprès d’un contact hier ? C’était elle ?” me demande <strong class="people">SOLDAT</p>
<p>“- Non, ce n’était pas elle. Des <strong class="mc">Psycheïdes&nbsp;je crois. Ils sont en panique et on a juste 1 mois pour se préparer.”</p>
`, 10, ["mission"]));
this.fragments.push(new Fragment(userService.chef,
      ["commando","comando"],
      `Versailles, Jardin - 28 septembre 1936 - Dahona`,
      `<p>Je me tourne vers <strong class="people">ERUDIT et demande :</p>
<p>“- Les <strong class="mc">Dahona, ça te parle ?”</p>
<p>“- Oui, mais je n’ai pas lu beaucoup de détail sur eux. Ils sont un peu comme nos ogres dans nos histoires pour enfants j’ai l’impression. Il y a un certain tabou à leur propos. Ils existent vraiment ?”</p>
<p>“- Apriori, et il semblent qu’ils aient fait un lien vers notre <strong class="mc">plan, au château de <strong class="mc">Martinvast. Ils planifierait un <strong class="mc">attentat à l’occasion d’un <strong class="mc">mariage le 28 octobre, en violation de tous les traités de neutralité. Et il y aurait pas mal de notable et célébrité humaines.. Mon contact a subtilement évité ma question sur le genre d’<strong class="mc">attentat que les <strong class="mc">Dahona pensent faire. ”</p>
<p>“- Bref, ils vont tous les tuer, d’une manière ou d’une autre, c’est ça ?” affirme <strong class="people">SOLDAT conclus</p>
<p>“- On va supposer que c’est ça.” je répond.</p>
<p><strong class="people">ERUDIT demande :</p>
<p>“- Et il ne suffit pas de faire sauter le <strong class="mc">portail, comme d’habitude ?”</p>
<p>“- Oui et non, apparement le châteaux et particulièrement protégé et les <strong class="mc">Dahona se montrent prudent. Les <strong class="mc">Dahona ouvrent le <strong class="mc">portail avec une très grande modération. Ils se sont installé avec beaucoup de discrétion. Ils sont actuellement absent mais prévoient d’ouvrir le <strong class="mc">portail pour revenir juste avant la cérémonie. Ça sera la seul opportunité.”</p>
<p><strong class="people">SOLDAT ajoute :</p>
<p>“- Vu qu’il y aura surement des civils ou innocents dans le coin, je suppose que je devrais préparer une bombe de puissance modérée, pour détruire le lien sans détruire tout le château...”</p>
<p>“- bien vu, ça veut dire qu’il faudra se montrer précis sur la localisation du <strong class="mc">portail, on ne peut pas se permettre de le louper” ajoute <strong class="people">ERUDIT</p>
<p>J’ajoute :</p>
<p>“- &nbsp;Oui, et autant mon contact m’a dit qu’il devrait <strong class="mc">pouvoir trouver l’heure exacte d’ouverture du <strong class="mc">portail autant personne ne sait à quoi il ressemblera et ou il arrivera.”</p>
<p>On arrive au fond du jardin. Je déverrouille le cabanon qui nous sert de repère, et je reprend en entrant:</p>
<p>“- Pour la sécurité, il y a 2 points gênants. D’abord il y a un champ statique autour du chateaux…”</p>
<p>“- donc on ne pourra pas faire téléporter d’objet à l’intérieur du château. Un <strong class="mc">télékinésiste pourrait téléporter la bombe s’il est déjà à l'intérieur du champ statique.” me coupe <strong class="people">ERUDIT</p>
<p>“- oui, mais il faudra trouver un téléporteur humanoïde, sinon il ne passera pas les portes du château.”</p>
<p>“- Ah mince. Je suppose que ça existe mais il va falloir se bouger pour en trouver un à temps.”</p>
<p>J’ouvre la <strong class="mc">trappe&nbsp;et je descend l'échelle sous la <strong class="mc">trappe. <strong class="people">ERUDIT me suit et <strong class="people">SOLDAT ferme la marche. Je nettois le tableau noir. Quand je me retourne, <strong class="people">ERUDIT à trouvé un gros livre et <strong class="people">SOLDAT nous a servis à boire. Je reprend :</p>
<p>“- D’autre part, mon contact m’a dit qu’il y aura des statues à l’entrée.”</p>
<p>“- Donc ce qui veut dire qu’on sera découvert dès que l’un de nous rentre dans ce chateaux” dit <strong class="people">ERUDIT en méditant</p>
<p>“- Oui, mais mon contact m’a dit qu’il me fournirait quelqu’un pour ça : il peut une potion pour provoquer une amnésie temporaire. Ainsi les pensées ne pourront plus nous trahir mais d’un autre côté on ne se souviendra plus de pourquoi on est là bas. La <strong class="mc">mémoire nous reviendra petit à petit, mais des déclencheurs peuvent nous aider à retrouver des parcelles spécifique de <strong class="mc">mémoire. ”</p>
<p>“- On a qu’a tout écrire et on arrivera bien fouiller nos poches sur place pour lire nos notes et réactiver nos souvenirs ...” répond <strong class="people">SOLDAT</p>
<p>“- Non, c’est pas si simple.” le coupe <strong class="people">ERUDIT, le nez contre le grimoire aux caractères incongrus “ écoutez : ‘[...] les statues sont capables de capter des brides de pensées quelque soit leur support, pour elle un livre ne diffère pas d’un cerveau [...]’. Donc si on vient avec notre <strong class="mc">plan dans la poche, ça sera exactement comme l’avoir en tête. Il va falloir tout camoufler dans des indices futiles et décoder l’ensemble sur place.”</p>
`, 11, ["pouvoir"]));
this.fragments.push(new Fragment(userService.chef,
      ["codex"],
      `Versailles, Jardin - 28 septembre 1936 - Le plan`,
      `<p>Tout notion d’heure a disparu, je n’ai plus aucune idée de combien de temps nous travaillons au repère. Le <strong class="mc">plan prend forme au tableau. Il est temps de faire une synthèse :</p>
<p>“- Bon, je résume. On trouve des invitations pour le <strong class="mc">mariage et on y rentre comme invité en ayant oublié notre <strong class="mc">mémoire. On arrive en avance, on devrait nous faire patienter dans un petit salon. <strong class="mc">Maurice, tu auras une bombe avec toi, préprogrammé à la bonne heure, au cas ou on oublie. Sur place, il faudra localiser l’emplacement ou le <strong class="mc">portail va s’ouvrir. <strong class="mc">Roberta, tu es assez confiante sur le fait que sur place il y aura de la documentation sur leur <strong class="mc">plan ?”</p>
<p>“ - Oui, quand des planaires s’installent ils viennent habituellement avec leurs possessions, il est trop dangereux et coûteux de devoir ouvrir le <strong class="mc">portail à chaque fois qu’ils on besoin d’un livre ou d’un objet quelconque.”</p>
<p>“ - Donc sur place, <strong class="mc">Rina cherche les livres dans les pièces. Avec l’aide du <strong class="mc">plan, on les localise et le <strong class="mc">télékinésiste les récupère. Là, on trouve les informations sur le <strong class="mc">portail au plus vite. Tu es bien sûr qu’elles y seront ?”</p>
<p>“- Oui. C’est vitale d’avoir ça, sans les informations d’ouverture de <strong class="mc">portail tu prend le risque d’être bloqué à tout jamais si le lien se casse. Personne ne va sur un autre <strong class="mc">plan sans un <strong class="mc">codex&nbsp;d’ouverture de <strong class="mc">portail” répond <strong class="people">ERUDIT</p>
<p>“- Un fois qu’on a trouvé où sera le <strong class="mc">portail, <strong class="mc">Rina trouve l’endroit et on téléporte la bombe là bas.”</p>
<p>“- Oui, et je viens quand même. Si on ne trouve pas, ça peut être pas mal de <strong class="mc">pouvoir désamorcer la bombe.” ajoute <strong class="people">SOLDAT.</p>
<p>Je continue :</p>
<p>“- Oui. Donc, <strong class="mc">Roberta, tu t’occupe de parler de cette <strong class="mc">mission à <strong class="mc">Rina. <strong class="mc">Maurice, tu prépare la bombe, il ne faut aucune écriture dessus ! Je vais arranger le transport et la logistique pour avoir un endroit ou se préparer avant le <strong class="mc">mariage. Je connais le patron du <strong class="mc">bar Mortebière&nbsp;à Caen par exemple. En parallèle, tout le monde cherche ‘discrètement’ un moyen d’avoir les invitations au <strong class="mc">mariage et le <strong class="mc">plan du chateaux. Ah et bien sur, enquêtez pour trouver un <strong class="mc">télékinésiste !”</p>
`, 12, ["pouvoir"]));
this.fragments.push(new Fragment(userService.chef,
      ["suzanne","suzane"],
      `Versailles, Repère - 1936`,
      `<p><strong class="people">SOLDAT bricole dans le coin du repère. Je règle avec <strong class="people">ERUDIT les derniers détails du <strong class="mc">plan. Elle me dit :</p>
<p>“- C’est bon, le contact de <strong class="mc">Rina était fiable. On a notre <strong class="mc">télékinésiste, je lui ai demandé d’apprendre par coeur une formule pour récupérer directement de livre de la bibliothèque.”</p>
<p>“- Bien. Et c’est bon pour la <strong class="mc">journaliste ?”</p>
<p>“- Oui, elle a bien travaillé. Elle m’a envoyé une ébauche de son <strong class="mc">plan, elle a bien bossé.”</p>
<p>Tout semble bon. Je commence à me détendre. <strong class="people">ERUDIT ajoute :</p>
<p>“- Ah, et pour <strong class="mc">Rina, tu devras l’appeler <strong class="mc">Suzanne. J’ai aussi donné cette consigne à <strong class="mc">Rina et elle aura une grande cape pour ne pas être reconnue.”</p>
<p>“- Bonne idée, ça évitera d’avoir à gérer la surprise.”</p>
<p>La conversation se poursuit et dérive. Alors qu’on parle de botanique planaire, car on a le projet de faire pousser des plantes planaires dans la serre, <strong class="people">SOLDAT pose une question. Je n’ai pas tout suivi mais <strong class="people">ERUDIT répond :</p>
<p>“ - 15 et 53, ça irait ?”</p>
`, 13));
this.fragments.push(new Fragment(userService.chef,
      ["capsule","bierre","biere","bouchon"],
      `Caen, Bar - Ce matin 8h - Arrivée`,
      `<p>Je ferme à clé la porte du la petite salle au fond du <strong class="mc">bar&nbsp;que j’ai loué pour la journée. Nous devrions être tranquille. Je me retourne vers <strong class="people">SOLDAT et je dis :</p>
<p>“- c’est bon, on peut commencer. Les autres arrivent vers midi.”</p>
`, 14));
this.fragments.push(new Fragment(userService.chef,
      ["électronique","electronique","electronic","éléctronique"],
      `Caen, Bar - Ce matin 8h - Préparation`,
      `<p>Je me retourne, <strong class="people">SOLDAT a déjà ouvert la <strong class="mc">mallette contenant la bombe. Je ne me souviens pas de ce genre de design. Il y a beaucoup plus de fils que d’habitude et aucun cadran. J’ajoute:</p>
<p>“- oh, elle a l’air assez différente de d'habitude. C’est donc ça que tu bricolais la semaine dernière pendant que je parlais de jardinage avec <strong class="mc">Roberta ?”</p>
<p>“- oui, j’ai vu avec elle qu’il fallait éviter de faire un retardateur classique pour ne pas éveiller de soupçons des statues. Ça reste assez simple mais c’est fait avec un peu d’électronique. Les valeurs sont plus ou moins chiffré et il y a une sécurité pour rendre son désamorçage pas trivial.”</p>
<p>“- explique moi tout en détail, ça t’aidera à t’en souvenir si il y a besoin d’annuler sur place.”</p>
<p><strong class="people">SOLDAT bidouille les fils et commence son explication.</p>
<p>“- il y a 16 fils, 10 sont utilisés pour configurer le retardateur et les 6 autres sont les fils de commande. Globalement, si on connecte ou déconnecte les fils au hasard il ne se passera rien, ça ne l’amorcera ou la désamorce pas.”</p>
<p>“- c’est rassurant” je répond, un peu perdu.</p>
<p>Il continue son explication, me montre un dessin de <strong class="mc">canard qui sert à coder la bombe puis part dans des explications techniques.</p>
<p>“... a bombe s’arme avec la valeur indiqué en minute par les fils de configuration.”</p>
<p>Je répond pour faire comme si j’avais suivi :</p>
<p>&nbsp;“- Il vaut mieux éviter d’avoir mis 1 minute par accident”</p>
<p>Il reprend. Je répond ponctuellement, je compte surtout sur plus pour se rappeler de ce qu’il me dit. Puis à un moment il demande :</p>
<p>“- tu as l’heure d’ouverture du <strong class="mc">portail ?”</p>
<p>“- oui, 23h47, on peut prendre une minute de sécurité mais il faut pas trop tarder, disons que la bombe doit exploser à 23h48.” je répond</p>
<p>“- donc si on configure la bombe à 10h, ça fait 10h et 48 minutes soit ...”</p>
<p>“ - <strong class="mc">648&nbsp;minutes” je calcule</p>
<p>Il fait quelques calculs sur un bout de papier, connecte&nbsp;des fils puis annonce :</p>
<p>“- voilà, j’ai mis le temps et presque configuré le <strong class="mc">code d'amorçage. à 10h pile on branche ce fil”</p>
`, 15));
this.fragments.push(new Fragment(userService.chef,
      ["maurice"],
      `Caen, Bar - 10h - Le code`,
      `<p><strong class="people">SOLDAT branche le dernier fils, je replace le tissu et je ferme la <strong class="mc">malette la verrouille avec le <strong class="mc">code 112.</p>
`, 16, ["code"]));
this.fragments.push(new Fragment(userService.chef,
      ["bar"],
      `Caen, Bar - Ce midi - Le briefing`,
      `<p>Ça frappe à la porte, je m’approche et frappe un coup, j’entend 3 coups en réponses. C’est <strong class="people">ERUDIT ! Je déverrouille la porte et la laisse entrer avec la personnes qu’il l'accompagne. Je compte rapidement le nombre de silhouette dans la salle … 5 personnes en plus de <strong class="people">SOLDAT, le compte est bon. C’est le moment de commencer. Je prends un soupir et prend la parole :</p>
<p>“- Bonjour à tous. Merci d’être là à l’heure. Pour des raisons de sécurité, vous n’avez pas été tenu au courant de la nature exacte de cette opération. Normalement on vous a prévenu que la <strong class="mc">mission&nbsp;était dangereuse.”</p>
<p>“- Oui, ils ont tous accepté en connaissance de cause.” &nbsp;confirme <strong class="people">ERUDIT</p>
`, 17));
this.fragments.push(new Fragment(userService.chef,
      ["mortebiere"],
      `Caen, Bar - Ce midi - La mission`,
      `<p>“- Le but de notre opération est d'empêcher un <strong class="mc">attentat, et de neutraliser tous les terroristes. Nous irons ce soir au châteaux nous infiltrer au <strong class="mc">mariage de Hector de La Grande Marche et Marie Elisabeth d’Autriche. Ce <strong class="mc">mariage c’est qu’un prétexte pour inviter une grande quantité de notable et dirigeant dans le but de les assassiner.</p>
<p>Nous savons que l’<strong class="mc">attentat surviendra quand tout le monde sera rassemblé dans la grande salle, à partir de minuit. Nous avons une bombe et notre seule chance d'empêcher le massacre est de la faire exploser exactement au bon moment et au bon endroit pour éliminer les terroristes à leur arrivée.”</p>
<p>“- Pourquoi ce n’est pas la police qui s’occupe de ça ?” &nbsp;demande une dame (<strong class="mc"><strong class="people">JOURNALISTE)</p>
<p>“- C’est une <strong class="mc">mission délicate, et les instances dirigeantes préfères ne pas être impliquées. C’est pour ça que nous sommes chargés de résoudre le problème discrètement.” je répond.</p>
<p>“- Et je suppose que vous savez comment faire ?” demande <strong class="people">TELE</p>
<p>“- Oui, nous savons de source sûre l’heure exacte où la bombe doit exploser. Et celle-ci est d’ailleurs déjà configurée” je répond en montrant la valise sur la table près de <strong class="people">SOLDAT</p>
<p>“- Et pour l’emplacement ? C’est habituellement plus simple à savoir !” relance-elle</p>
<p>“- <strong class="mc">Roberta, avec l’aide de <strong class="mc">Suzanne se chargera de localiser l’emplacement, et comme vous vous en doutez, vous serez chargé de placer la bombe.”</p>
<p>“- Ma carte servira à ce moment ? demande <strong class="mc"><strong class="people">JOURNALISTE</p>
<p>“- Oui, vous fournirez le <strong class="mc">plan du château pour aider à la localisation du por… de l’emplacement. Et de ce que vous cherchez dans le château par la même occasion.”</p>
<p>“- oui …” répond t-elle, “j’ai le <strong class="mc">plan, enfin partiellement dessiné. Je ne vois toujours pas vraiment en quoi vos instructions vont nous aider vu que je sais comment mon camouflage fonctionne. Si je suis interrogé et menacé je ne vous promet pas de ne rien révéler.”</p>
<p>“Ne vous inquiétez pas, c’est là que notre dernier équipier intervient”.</p>
<p>Je me tourne vers la dernière personne tapis dans l’ombre.</p>
<p>“- Monsieur, comment dois-je vous appeler ?”</p>
<p>“- Heu … Jules … oui, c’est ça, Docteur Jules”</p>
<p>“- Bien docteur, vous avez la potion promise ?”</p>
<p>“- Oui, bien sûr la voilà” répond <strong class="people">MONSTRE en montrant un petit flacon.</p>
<p>“- Juste avant d’arriver au château, nous allons boire de cette potion. Ses effets sont très efficaces et nous permettront de <strong class="mc">pouvoir mentir et résister aux interrogatoire bien plus efficacement.“</p>
<p>Après un petit temps de réflections, je me souviens des invitations. Je me tourne à nouveau vers <strong class="mc"><strong class="people">JOURNALISTE et lui demande :</p>
<p>“- Ah ! Avez-vous les invitations ?”</p>
<p>Elle hoche la tête et me tend 4 cartons. Je lui en prend 3.</p>
<p>“- Gardez en une pour vous”</p>
<p>Je donne une invitation à <strong class="people">VOYANTE, une à <strong class="people">MONSTRE et je garde la dernière. J’attends quelques secondes, puis demande :</p>
<p>“- Avez vous compris ? Avez-vous des questions ?”</p>
<p>“- Avez-vous mon paiement ?” demande <strong class="people">TELE de manière agressive</p>
<p>“- Oui, voici la 1er partie” je dis en sortant une petite bourse de ma poche. “Comme convenue, je vous donne la suite en sortant du chateaux”</p>
`, 18, ["pouvoir"]));
this.fragments.push(new Fragment(userService.chef,
      ["mémoire","memoire"],
      `Sur la route de Martinvast - Il y a quelques minutes`,
      `<p>Le château se profile au bout de l’allée. J’entend quelques petites tintement, <strong class="people">MONSTRE sort les fioles et commence à les distribuer aux autres puis prend la parole :</p>
<p>“- Buvez ça maintenant, ça va mettre quelque secondes à agir”</p>
<p>Tout le monde ouvre son falcon, je fais de même et boit son contenu d’une traite.</p>
<p>“- Hum, c’est bon ton médicament, docteur !” s’exclame <strong class="people">VOYANTE</p>
<p>Je ne sens rien de spéciale, ma <strong class="mc">mémoire ne semble pas encore disparaître. J’espère que le produit marche !</p>
<p>“- <strong class="mc">Rina … <strong class="mc">Rina c’est toi ? Arrêtez la voiture !” s’exclame <strong class="mc"><strong class="people">JOURNALISTE en fusillant <strong class="people">VOYANTE du regard, rouge de colère.</p>
<p>“- C’est un piège !” s’exclame <strong class="people">TELE.</p>
<p>Il fallait que ça arrive, vivement que la potion fasse effet !</p>
`, 19));
this.fragments.push(new Fragment(userService.soldat,
      ["verdun","verdin"],
      `Cambrai, Tranchés - 1917`,
      `<p>Les balles sifflaient au dessus de moi. Les gars me couvrent pendant que je prépare la mèche, il ne tiendront pas longtemps.</p>
<p>La mêche est branchée, je l’allume et cale la bombe entre &nbsp;2 poutres et crie :</p>
<p>“- C’est bon, on se barre, on a une minute trente !”</p>
<p>On part en courant dans la tranchée. Des détonations, une balle me frôle et touche SOLDAT2 à la <strong class="mc">jambe. Tant pis, on pourra venir le récupérer quand le tunnel aura sauté.</p>
<p>Ma bombe explose, la tranchée est sauvée ... pour le moment.</p>
`, 0));
this.fragments.push(new Fragment(userService.soldat,
      ["afrique"],
      `Afrique du sud, Mine de diamant - 1919`,
      `<p>Ah, ce connard de <strong class="people">CONTREMAITRE cherche encore la merde, sur qui ça va va tomber cette fois ?</p>
<p><strong class="people">CONTREMAITRE s’approche de <strong class="people">ESCLAVE et comment à l'engueuler,et comme d’habitude à le frapper.</p>
<p>Ca me dégoute, je me reconcentre sur ma pioche trempée par ma sueur et je recommence à attaquer la parois.</p>
<p>Quelques secondes plus tard, les cris du passage à tabac me forcent à me retourner. <strong class="people">ESCLAVE est au sol dans une marre de <strong class="mc">sang et <strong class="people">CONTREMAITRE continue de le frapper.</p>
<p>Et puis merde, je m’élance et envoie <strong class="people">CONTREMAITRE au tapis d’un crochet dans la machoire. Je viens de perdre mon boulot, ou pire …</p>
<p>Je me penche et aide <strong class="people">ESCLAVE à se relever.</p>
<p>“- Quel est votre nom ?” me crie une voix.</p>
<p>Je lève la tête, une personne se tient sur le bord de la <strong class="mc">mine, en haut. Le <strong class="mc">soleil écrasant d’<strong class="mc">Afrique du Sud m’éblouie.</p>
<p>“- <strong class="mc">Maurice. <strong class="mc">Maurice Genevoix” je répond</p>
`, 1));
this.fragments.push(new Fragment(userService.soldat,
      ["mineur","mineurs"],
      `Afrique du sud, Mine de diamant - 1919`,
      `<p><strong class="people">CHEF m’attend dans son bureau. Mon poignet est douloureux mais les domestiques de <strong class="people">CHEF m’ont bien soigné. Il me pointe un fauteuil dans lequel je m’assoit.</p>
<p>“- <strong class="mc">Maurice, savez-vous ce que vous risquez à frapper un de mes contremaître ?”</p>
<p>“- Oui …”</p>
<p>“- Vous avez fait preuve de courage, j’ai assisté à votre intervention et vous avez bien fait. Ce contremaître n’a pas à battre mes employés à mort sous prétexte qu’ils sont noirs.”</p>
<p>“- Euh … merci …”</p>
<p>“- Vous semblez savoir bien vous battre. Vous avez fait la guerre ?”</p>
<p>“- Oui, j’étais artificier. J’ai combattu à <strong class="mc">verdun et j’ai reçu la croix de guerre. Après la guerre j’ai décidé de venir en <strong class="mc">Afrique du Sud mais ce n’est pas si facile de trouver un boulot. Je suis plutôt chanceux de travailler dans votre <strong class="mc">mine.”</p>
<p><strong class="people">CHEF me regarde longuement puis me demande :</p>
<p>“- Vous n’êtes pas fait pour être <strong class="mc">mineur, que diriez vous de devenir mon majordome ? J’ai pas mal de tâche à vous confier.”</p>
`, 2));
this.fragments.push(new Fragment(userService.soldat,
      ["zurich"],
      `Zurich, Entrepôt en banlieu - 1927`,
      `<p>Un léger bruit, la porte s'entrouvre et une lueur de lanterne projette des ombres dans la pénombre de l'entrepôt.</p>
<p>“- ça y est, on les tient !” chuchote <strong class="people">CHEF</p>
<p>“- ils sont en avance on dirait” je répond</p>
<p>La lanterne s’avance dans l'entrepôt, aucun bruit de pas ne semble provenir de son porteur.</p>
<p>Je réalise que la lanterne vient droit vers notre planque. Je sens la main de <strong class="people">CHEF se poser fermement sur mon bras alors que j'allais lever mon fusil.</p>
<p>“- attends encore un peu” murmure t-il à mon oreille.</p>
<p>La lumière arrête de bouger à quelque mètres devant nous et j'aperçois 2 yeux brillants légèrement au dessus.</p>
<p>Soudain un rire féminin résonne dans l'entrepôt.</p>
<p>“- si vous voulez les voir, vous ne regardez pas dans la bonne direction messieurs <strong class="mc">Pollack et Genevoix !” dit la forme</p>
<p>Semblant mettre tout prudence de côté, <strong class="people">CHEF s’avance vers la femme. Je le suis et j'aperçois pour la 1er fois, dans la lueur de la lampe, le beau visage de <strong class="people">AGENT.</p>
<p>“- Qui êtes vous ?“ demande doucement <strong class="people">CHEF à <strong class="people">AGENT</p>
<p>“- Peu importe. Mais je dois dire que je suis impressionné par votre travaille d’enquête. Sans vous pister je ne crois pas que j’aurais pu trouver le <strong class="mc">portail seule. Mais il est temps d’intervenir, vous allez avoir besoin de mon aide.”</p>
<p>“- De quoi parlez vous ? Qu’est-ce que vient faire ici cette histoire de <strong class="mc">portail ? Vous aussi vous enquêtez sur la filière clandestine d’importation de <strong class="mc">diamant. La transaction devrait avoir lieu ici d’un moment à l’autre ! D'ailleurs éteignez cette lumière et venez vous cacher avec nous !</p>
<p>“- Oh, me cacher comme une humaine ... pourquoi pas” lâcha t-elle avec un petit rire ”laissez moi juste régler un “détail”, il reste encore 15 bonnes minute avant leur arrivée.”</p>
<p><strong class="people">AGENT marche tranquillement vers le mur opposé à la porte de l'entrepôt posa un sac en toile sous une table près d’un bassin remplis d’eau croupi et de tas de détritus. Elle recouvrir le sac d’un vieux carton qui traînait et revient vers nous avec toujours autant d’énergie. Je demande :</p>
<p>“- qu’est ce que c’est ?”</p>
<p>“- oh, vous les verrez bien assez vite. Venez vous planquer ici” dit elle en indiquant un recoin en vu du carton.</p>
<p>Nous nous installons et <strong class="people">AGENT éteint sa lampe. Le silence revient, seuls les rats vient parfois le perturber. L’obscurité s’éclaircit à mesure que mes pupilles se remettent de l’éclaire de la lanterne, je vois <strong class="people">CHEF regarder attentivement le visage de <strong class="people">AGENT. Sa beauté, son assurance en ce lieu et ses yeux qui brillent encore légèrement me font me poser des questions sur le sens de son expression “me cacher comme une humaine”.</p>
<p>Les lèvres de <strong class="people">CHEF commencent à peine à bouger que <strong class="people">AGENT le devance</p>
<p>“- votre analyse était vraiment bonne, Harry. Il y a bien une source croissante de <strong class="mc">diamant injecté sur le marché. Cette source vient bien de <strong class="mc">Zurich et plus particulièrement cet entrepôt, mais vous vous trompez sur la source réel, ces <strong class="mc">diamants ne viennent pas d’une <strong class="mc">mine concurrente. En fait ils ne viennent pas de ce <strong class="mc">plan … mais d’un autre <strong class="mc">plan. Les Hadinos perturbe l’économie terrienne en totale violation des traités de neutralité de ce <strong class="mc">plan. Bref, il fallait agir et vous tombez bien.”</p>
<p>Elle s'arrête, regarde le carton attentivement et me regarde :</p>
<p>“- Ils vont arriver, vous pouvez me rendre un service ?”</p>
<p>“- Heu, je suppose”</p>
<p>Elle sort un petit boitier de sa poche et me le passe</p>
<p>“- Prenez ça. Quand ils seront rentrés, tous les 3, appuyez sur le bouton.”</p>
<p>Je prend l'objet pernicieusement et porte mon attention vers le carton. 30 secondes plus tard, un flash&nbsp;blanc laisse place à une sorte de voile irisé &nbsp;circulaire à 2 mètre du carton. 3 créatures plates et translucide en sort.</p>
<p>Je jete un coup d’oeil à <strong class="people">AGENT qui me fait une subtil geste d'approbation. J’appuis sur le bouton, la bombe explose.</p>
<p><strong class="people">CHEF est envoyé en arrière, j’amortis sa chute. Apparement il n’a pas autant l’habitude que moi de côtoyer des <strong class="mc">explosions.</p>
<p><strong class="people">AGENT ne semble pas nom plus particulièrement perturbé. Elle se lève aussitôt et s’avance vers le nuage de poussière en allumant sa lampe.</p>
<p>J’aide <strong class="people">CHEF à se lever, j’arme mon fusil et nous la suivons.</p>
<p>La poussière retombe peu à peu. Le <strong class="mc">portail a disparu. Les 3 créatures ont pris de la hauteur, des membres sont apparus et ils commencent à ressembler à des humanoïdes.</p>
<p><strong class="people">AGENT engage la conversation avec eux dans une langue inconnue. Après quelques minutes de conversation aux intonations étonnantes, <strong class="people">AGENT se tourne vers nous et dit</p>
<p>“- Félicitation messieurs, vous venez d'arrêter vos premiers planaires !</p>
`, 3));
this.fragments.push(new Fragment(userService.soldat,
      ["londres","london","londre"],
      `Londres, Colloque d’archéologie - 1929`,
      `<p>Les applaudissements timides me sortent de ma somnolence. Ces conférences d’archéologie ont le don de m’endormir.</p>
<p>A peine les applaudissements terminés, <strong class="people">CHEF se lève et se dirige à grand pas vers l’estrade où l’archéologue range ses notes, d’un air dépité. Je me lève pour ne pas laisser <strong class="people">CHEF me distancer.</p>
<p>Arrivé au pied de l’estrade il jette un oeil derrière lui pour vérifier que tout le monde se dirige bien vers la sortie, puis aborde la jeune archéologie.</p>
<p>“- Mademoiselle Broom, bravo pour votre exposé, votre analyse linguistique de ce document est remarquable !”</p>
<p><strong class="people">ERUDIT lève la tête et fixe <strong class="people">CHEF quelques instant, l’air intrigué :</p>
<p>“- vous vous moquez de moi, vous aussi ?“</p>
<p>“- non, pas le moins de monde mademoiselle. Mais je crois que votre auditoire n’était pas prêt à recevoir votre message et je crois que vous être passé pour une mystique.”</p>
<p><strong class="people">ERUDIT grimace et va répliquer quand <strong class="people">CHEF reprend :</p>
<p>“- ce document en <strong class="mc">Kagana, comme vous l’appelez, est-ce le seul que vous possédez ? Où l’avez vous trouvé ?”</p>
<p>“- hum, c’est compliqué … Et pourquoi je devrais vous faire confiance ?”</p>
<p><strong class="people">CHEF sourit et après quelques seconde à fouiller dans sa sacoche, il sort un petit carnet protégé dans un chiffon. Il le tend à <strong class="people">ERUDIT. Celle-ci le pris, et le parcours, de plus en plus frénétiquement alors que son visage transpire l’émerveillement.</p>
<p>“- c’est fabuleux, c’est &nbsp;un livre entier en <strong class="mc">Kagana !</p>
<p>“- pensez-vous <strong class="mc">pouvoir m’aider à le traduire ?”</p>
<p>“- vu le nombre de page, ça devrait devenir bien plus facile de déduire la grammaire qu’avec ma page ! Il me faudra un peu de temps ... mais oui ! Ou l’avez-vous trouvé ?”</p>
<p><strong class="people">CHEF jette un coup d'oeil rapide dans la salle derrière lui, puis répond:</p>
<p>“- la prochain conférence ne va pas tarder à commencer, cela vous dirait d’aller prendre un café pour parler de tout ça ?”</p>
<p>“- Volontiers”</p>
<p>“-J’espère que &nbsp;vous aimez l’aventure :)”</p>
`, 4));
this.fragments.push(new Fragment(userService.soldat,
      ["mariage","marriage"],
      `France, Eglise - Mai 1932`,
      `<p>En entrant dans la petite église, je sens le courant d’air frais glisser sur mon visage. Mon noeud papillon me sert un peu trop, mais je vais devoir faire avec encore quelque temps.</p>
<p>A mon bras, <strong class="people">ERUDIT est resplendissante dans sa robe de mariée. Elle sourit et sa timidité semble avoir temporairement disparu.</p>
<p>Près de l'hôtel, <strong class="people">CHEF l’attend. Alors que je croise son regard, je sens une pointe d’inquiétude.</p>
<p>“- Oui, j’ai pensé aux alliances” je lui lance du regard.</p>
`, 5));
this.fragments.push(new Fragment(userService.soldat,
      ["jambe","jambes"],
      `Versailles, Chambre - 1935`,
      `<p>Le <strong class="mc">soleil se lève, j’ouvre les yeux. Le dos nu d’<strong class="people">ERUDIT me fait face. Je m’approche pour l’enlacer à nouveau puis mes yeux se ferment.</p>
`, 6));
this.fragments.push(new Fragment(userService.soldat,
      ["trappe","statue"],
      `Versailles, Jardin - Septembre 1936`,
      `<p>J’arrive en retard au rendez-vous. <strong class="people">ERUDIT et <strong class="people">CHEF sont déjà en train de discuter tout en marchant dans le jardin. <strong class="people">CHEF se retourne et il a une <strong class="mc">mine sombre. Je sens qu’on me m’a pas convoqué pour organiser une fête.</p>
<p>Je rejoins leur marche et au bout de quelques seconde <strong class="people">CHEF annonce :</p>
<p>“- comme vous vous en doutez, on a une nouvelle <strong class="mc">mission. Mais celle là a l’air particulièrement délicate est dangereuse.”</p>
<p>“- Vous étiez donc à nouveau auprès d’un contact hier ? C’était elle ?” je demande</p>
<p>“- Non, ce n’était pas elle. Des <strong class="mc">Psycheïdes&nbsp;je crois. Ils sont en panique et on a juste 1 mois pour se préparer.”</p>
<p>Il marque une pause. Se tourne vers <strong class="people">ERUDIT et demande :</p>
<p>“- Les <strong class="mc">Dahona, ça te parle ?”</p>
<p>“- Oui, mais je n’ai pas lu beaucoup de détail sur eux. Ils sont un peu comme nos ogres dans nos histoires pour enfants j’ai l’impression. Il y a un certain tabou à leur propos. Ils existent vraiment ?”</p>
<p>“- Apriori, et il semblent qu’ils aient fait un lien vers notre <strong class="mc">plan, au château de <strong class="mc">Martinvast. Ils planifierait un <strong class="mc">attentat à l’occasion d’un <strong class="mc">mariage le 28 octobre, en violation de tous les traités de neutralité. Et il y aurait pas mal de notable et célébrité humaines.. Mon contact a subtilement évité ma question sur le genre d’<strong class="mc">attentat que les <strong class="mc">Dahona pensent faire. ”</p>
<p>“- Bref, ils vont tous les tuer, d’une manière ou d’une autre, c’est ça ?” &nbsp;je conclus</p>
<p>“- On va supposer que c’est ça.” répond <strong class="people">CHEF.</p>
<p><strong class="people">ERUDIT demande :</p>
<p>“- Et il ne suffit pas de faire sauter le <strong class="mc">portail, comme d’habitude ?”</p>
<p>“- Oui et non, apparement le châteaux et particulièrement protégé et les <strong class="mc">Dahona se montrent prudent. Les <strong class="mc">Dahona ouvrent le <strong class="mc">portail avec une très grande modération. Ils se sont installé avec beaucoup de discrétion. Ils sont actuellement absent mais prévoient d’ouvrir le <strong class="mc">portail pour revenir juste avant la cérémonie. Ça sera la seul opportunité.”</p>
<p>Je répond :</p>
<p>“- Vu qu’il y aura surement des civils ou innocents dans le coin, je suppose que je devrais préparer une bombe de puissance modérée, pour détruire le lien sans détruire tout le château...”</p>
<p>“- bien vu, ça veut dire qu’il faudra se montrer précis sur la localisation du <strong class="mc">portail, on ne peut pas se permettre de le louper” ajoute <strong class="people">ERUDIT</p>
<p>“- &nbsp;Oui, et autant mon contact m’a dit qu’il devrait <strong class="mc">pouvoir trouver l’heure exacte d’ouverture du <strong class="mc">portail autant personne ne sait à quoi il ressemblera et ou il arrivera.”</p>
<p>Alors que le silence tombe, on arrive au fond du jardin et <strong class="people">CHEF déverrouille le cabanon, et reprend en entrant:</p>
<p>“- Pour la sécurité, il y a 2 points gênants. D’abord il y a un champ statique autour du chateaux…”</p>
<p>“- donc on ne pourra pas faire téléporter d’objet à l’intérieur du château. Un <strong class="mc">télékinésiste pourrait téléporter la bombe s’il est déjà à l'intérieur du champ statique.” le coupe <strong class="people">ERUDIT</p>
<p>“- oui, mais il faudra trouver un téléporteur humanoïde, sinon il ne passera pas les portes du château.”</p>
<p>“- Ah mince. Je suppose que ça existe mais il va falloir se bouger pour en trouver un à temps.”</p>
<p><strong class="people">CHEF descend l'échelle sous la <strong class="mc">trappe. Je laisse <strong class="people">ERUDIT passer et je ferme la <strong class="mc">trappe derrière moi. Le repère est une bonne illustration du chaos, mais <strong class="people">ERUDIT extrait immédiatement quelques livre bien précis et les jette sur la grande table. <strong class="people">CHEF a entrepris de nettoyer le tableau noir. Je m’occupe du <strong class="mc">bar&nbsp;et sert 3 verres.</p>
<p>“- D’autre part, mon contact m’a dit qu’il y aura des statues à l’entrée.” reprend <strong class="people">CHEF</p>
<p>“- Donc ce qui veut dire qu’on sera découvert dès que l’un de nous rentre dans ce chateaux” dit <strong class="people">ERUDIT en méditant</p>
<p>“- Oui, mais mon contact m’a dit qu’il me fournirait quelqu’un pour ça : il peut provoquer une amnésie temporaire. Ainsi les pensées ne pourront plus nous trahir mais d’un autre côté on ne se souviendra plus de pourquoi on est là bas. La <strong class="mc">mémoire nous reviendra petit à petit, mais des déclencheurs peuvent nous aider à retrouver des parcelles spécifique de <strong class="mc">mémoire. ”</p>
<p>“- On a qu’a tout écrire et on arrivera bien fouiller nos poches sur place pour lire nos notes et réactiver nos souvenirs ...” je répond</p>
<p>“- Non, c’est pas si simple.” me coupe <strong class="people">ERUDIT, le nez contre un grimoire aux caractères incongrus “ écoutez : ‘[...] les statues sont capables de capter des brides de pensées quelque soit leur support, pour elle un livre ne diffère pas d’un cerveau [...]’. Donc si on vient avec notre <strong class="mc">plan dans la poche, ça sera exactement comme l’avoir en tête. Il va falloir tout camoufler dans des indices futiles et décoder l’ensemble sur place.”</p>
<p>Tout notion d’heure a disparu, je n’ai plus aucune idée de combien de temps nous travaillons au repère. Le <strong class="mc">plan prend forme au tableau. <strong class="people">CHEF semble soulagé et dit:</p>
<p>“- Bon, je résume. On trouve des invitations pour le <strong class="mc">mariage et on y rentre comme invité en ayant oublié notre <strong class="mc">mémoire. On arrive en avance, on devrait nous faire patienter dans un petit salon. <strong class="mc">Maurice, tu auras une bombe avec toi, préprogrammé à la bonne heure, au cas ou on oublie. Sur place, il faudra localiser l’emplacement ou le <strong class="mc">portail va s’ouvrir. <strong class="mc">Roberta, tu es assez confiante sur le fait que sur place il y aura de la documentation sur leur <strong class="mc">plan ?”</p>
<p>“ - Oui, quand des planaires s’installent ils viennent habituellement avec leurs possessions, il est trop dangereux et coûteux de devoir ouvrir le <strong class="mc">portail à chaque fois qu’ils on besoin d’un livre ou d’un objet quelconque.”</p>
<p>“ - Donc sur place, <strong class="mc">Rina cherche les livres dans les pièces. Avec l’aide du <strong class="mc">plan, on les localise et le <strong class="mc">télékinésiste&nbsp;les récupère. Là, on trouve&nbsp;les informations sur le <strong class="mc">portail au plus vite. Tu es bien sûr qu’elles y seront ?”</p>
<p>“- Oui. C’est vitale d’avoir ça, sans les informations d’ouverture de <strong class="mc">portail tu prend le risque d’être bloqué à tout jamais si le lien se casse. Personne ne va sur un autre <strong class="mc">plan sans un <strong class="mc">codex&nbsp;d’ouverture de <strong class="mc">portail.” répond <strong class="people">ERUDIT</p>
<p>“- Un fois qu’on a trouvé où sera le <strong class="mc">portail, <strong class="mc">Rina trouve l’endroit et on téléporte la bombe là bas.”</p>
<p>“- Oui, et je viens quand même. Si on ne trouve pas, ça peut être pas mal de <strong class="mc">pouvoir désamorcer la bombe.” j’ajoute.</p>
<p><strong class="people">CHEF continue :</p>
<p>“- Oui. Donc, <strong class="mc">Roberta, tu t’occupe de parler de cette <strong class="mc">mission à <strong class="mc">Rina. <strong class="mc">Maurice, tu prépare la bombe, il ne faut aucune écriture dessus ! Je vais arranger le transport et la logistique pour avoir un endroit ou se préparer avant le <strong class="mc">mariage. Je connais le patron du <strong class="mc">bar Mortebière&nbsp;à Caen par exemple. En parallèle, tout le monde cherche ‘discrètement’ un moyen d’avoir les invitations au <strong class="mc">mariage et le <strong class="mc">plan du chateaux. Ah et bien sur, enquêtez pour trouver un <strong class="mc">télékinésiste&nbsp;!”</p>
`, 7, ["pouvoir"]));
this.fragments.push(new Fragment(userService.soldat,
      ["15","53"],
      `Versailles, Repère - 1936`,
      `<p>J’ai presque fini de préparer cette bombe. Je suis assez fier du mécanisme de chiffrement.</p>
<p>Il me manque plus qu’a mettre choisir les codes de commande.</p>
<p><strong class="people">CHEF et <strong class="people">ERUDIT semble avoir fini de bosser, j’ai l’impression qu’ils papotent de botanique planaire derrière moi !</p>
<p>Je demande à tout hasard :</p>
<p>“ - vous pouvez me donner 2 nombres entre 0 et 63 ?”</p>
<p>Après quelques seconde <strong class="people">ERUDIT répond :</p>
<p>“ - 15 et 53, ça irait ?”</p>
`, 8));
this.fragments.push(new Fragment(userService.soldat,
      ["explosion","éxplosion","explosions"],
      `Caen, Bar - Ce matin 8h - Bombe`,
      `<p>Les cris venant du <strong class="mc">bar s’estompent alors que <strong class="people">CHEF ferme et verrouille la porte de la petite salle du fond.</p>
<p>“- c’est bon, on peut commencer. Les autres arrivent vers midi.” dit <strong class="people">CHEF</p>
<p>J’ouvre la <strong class="mc">mallette posé sur la table et je soulève le tissu qui cache la bombe.</p>
<p><strong class="people">CHEF se retourne et dit :</p>
<p>“- oh, elle a l’air assez différente de d'habitude. C’est donc ça que tu bricolais la semaine dernière pendant que je parlais de jardinage avec <strong class="mc">Roberta ?”</p>
<p>“- oui, j’ai vu avec elle qu’il fallait éviter de faire un retardateur classique pour ne pas éveiller de soupçons des statues. Ça reste assez simple mais c’est fait avec un peu d’électronique. Les valeurs sont plus ou moins chiffré et il y a une sécurité pour rendre son désamorçage pas trivial.”</p>
<p>“- explique moi tout en détail, ça t’aidera à t’en souvenir si il y a besoin d’annuler sur place.”</p>
<p>J’isole proprement tous les fils pour qu’on les voit bien.</p>
<p>“- il y a 16 fils, 10 sont utilisés pour configurer le retardateur et les 6 autres sont les fils de commande. Globalement, si on connecte ou déconnecte les fils au hasard il ne se passera rien, ça ne l’amorcera ou la désamorce pas.”</p>
<p>“- c’est rassurant” dit <strong class="people">CHEF, pensif</p>
`, 9));
this.fragments.push(new Fragment(userService.soldat,
      ["canard","canard"],
      `Caen, Bar - Ce matin 8h - Canard`,
      `<p>“- les fils ne sont pas dans l’ordre, pour trouver l’ordre, j’ai fait ce petit dessin que je comptes garder sur moi : les 6 pattes du <strong class="mc">canard géant indiquent quels fils sont les fils de commande. Les autres sont ceux de configuration. Ils sont dans l’ordre, de gauche à droite.”</p>
<p>“- joli dessin” dit <strong class="people">CHEF</p>
<p>“- donc il y a 2 commandes : amorcer la bombe, et la désamorcer. Évidemment, on ne peut amorcer la bombe que si elle n’est pas active, et inversement. Par exemple le <strong class="mc">code de désamorçage est est 53 en binaire, soit 110101. Au moment ou le <strong class="mc">code d'amorçage est est saisie sur les fils de commande, la bombe s’arme avec la valeur indiqué en minute par les fils de configuration.”</p>
`, 10));
this.fragments.push(new Fragment(userService.soldat,
      ["648"],
      `Caen, Bar - Ce matin 8h - Minuterie`,
      `<p>“- Il vaut mieux éviter d’avoir mis 1 minute par accident” répond <strong class="people">CHEF, surement pour faire croire qu’il suit.</p>
<p>“- oui, mais la lumière indiquant que la bombe est armée clignote plus vite dans la dernière heure. Ça permet de vérifier sans pour autant donner d’informations aux statues. D’ailleurs ce temps est juste le nombre de minutes codé sur les 10 fils de configuration de la même manière de que les codes de commandes.”</p>
<p>“- d’accord, ça a l’air presque simple” commente <strong class="people">CHEF</p>
<p>“- tu as l’heure d’ouverture du <strong class="mc">portail ?”</p>
<p>“- oui, 23h47, on peut prendre une minute de sécurité mais il faut pas trop tarder, disons que la bombe doit exploser à 23h48.”</p>
<p>“- donc si on configure la bombe à 10h, ça fait 10h et 48 minutes soit ...”</p>
<p>“ - <strong class="mc">648 minutes” répond <strong class="people">CHEF</p>
<p>Je fais les calculs sur un bout de papier et configure les fils.</p>
<p>“- voilà, j’ai mis le temps et presque configuré le <strong class="mc">code d'amorçage. à 10h pile on branche ce fil”</p>
`, 11));
this.fragments.push(new Fragment(userService.soldat,
      ["malette","malettes","mallete","mallette","mallettes","malettes"],
      `Caen, Bar - 10h - Le code`,
      `<p>Je le branche le dernier fil. <strong class="people">CHEF met un <strong class="mc">code&nbsp;à la <strong class="mc">mallette et la verrouille.</p>
`, 12));
this.fragments.push(new Fragment(userService.soldat,
      ["capsule","bouchon","bière"],
      `Caen, Bar - 11h - Se souvenir`,
      `<p><strong class="people">CHEF prend une capsules de <strong class="mc">bière sur la table et la met dans sa poche. Je demande :</p>
<p>“- Pourquoi tu prend cette <strong class="mc">capsule ?“</p>
<p>“- Pour m’aider à me souvenir de cette scène quand nous aurons perdu la <strong class="mc">mémoire”</p>
<p>“- Bonne idée, je vais faire la même chose”</p>
`, 13));
this.fragments.push(new Fragment(userService.soldat,
      ["mortebiere"],
      `Caen, Bar - Ce midi - Le briefing`,
      `<p>Ça frappe à la porte, <strong class="people">CHEF s’approche et frappe un coup, on entend 3 coups en réponses. &nbsp;<strong class="people">CHEF déverrouille la porte et la laisse entrer avec la personnes qu’il l'accompagne. Après quelque secondes <strong class="people">CHEF pousse un soupir et prend la parole :</p>
<p>“- Bonjour à tous. Merci d’être là à l’heure. Pour des raisons de sécurité, vous n’avez pas été tenu de la nature exacte de cette opération. Normalement on vous a prévenu que la <strong class="mc">mission était dangereuse.”</p>
<p>“- Oui, ils ont tous accepté en connaissance de cause.” &nbsp;confirme <strong class="people">ERUDIT</p>
<p><strong class="people">CHEF continue :</p>
<p>“- Le but de notre opération est d'empêcher un <strong class="mc">attentat en &nbsp;… commettant un <strong class="mc">attentat pour éliminer la menace. Nous irons ce soir au châteaux nous infiltrer au <strong class="mc">mariage de Hector de La Grande Marche et Marie Elisabeth d’Autriche. Ce <strong class="mc">mariage c’est qu’un prétexte pour inviter une grande quantité de notable et dirigeant dans le but de les assassiner.</p>
<p>Nous savons que l’<strong class="mc">attentat surviendra quand tout le monde sera rassemblé dans la grande salle, à partir de minuit. Nous avons une bombe et notre seule chance d'empêcher le massacre est de la faire exploser exactement au bon moment et au bon endroit pour éliminer les terroristes à leur arrivée.”</p>
<p>“- Pourquoi ce n’est pas la police qui s’occupe de ça ?” &nbsp;demande une dame (<strong class="mc"><strong class="people">JOURNALISTE)</p>
<p>“- C’est une <strong class="mc">mission délicate, et les instances dirigeantes préfères ne pas être impliquées. C’est pour ça que nous sommes chargés de résoudre le problème discrètement.” répond <strong class="people">CHEF.</p>
<p>“- Et je suppose que vous savez comment faire ?” demande <strong class="people">TELE</p>
<p>“- Oui, nous savons de source sûre l’heure exacte à la bombe doit exploser. Et celle-ci est d’ailleurs déjà configurée” répond <strong class="people">CHEF en montrant la valise sur la table près de moi</p>
<p>“- Et pour l’emplacement ? C’est habituellement plus simple à savoir !” relance-elle</p>
<p>“- <strong class="mc">Roberta, avec l’aide de <strong class="mc">Suzanne se chargera de localiser l’emplacement, et comme vous vous en doutez, vous serez chargé de placer la bombe.”</p>
<p>“- Ma carte servira à ce moment ? demande une <strong class="mc"><strong class="people">JOURNALISTE</p>
<p>“- Oui, vous fournirez le <strong class="mc">plan du château pour aider à la localisation du por… de l’emplacement. Et de ce que vous cherchez dans le château par la même occasion.”</p>
<p>“- oui …” répond t’elle, “j’ai le <strong class="mc">plan, enfin partiellement dessiné. Je ne vois toujours pas vraiment en quoi vos instructions vont nous aider vu que je sais comment mon camouflage fonctionne. Si je suis interrogé et menacé je ne vous promet pas de ne rien révéler.”</p>
<p>“Ne vous inquiétez pas, c’est là que notre dernier équipier intervient”.</p>
<p><strong class="people">CHEF se tourne vers la dernière personne tapis dans l’ombre.</p>
<p>“- Monsieur, comment dois-je vous appeler ?”</p>
<p>“- Heu … Jules … oui, c’est ça, Docteur Jules”</p>
<p>“- Bien docteur, vous avez la potion promise ?”</p>
<p>“- Oui, bien sûr la voilà” répond <strong class="people">MONSTRE en montrant un petit flacon.</p>
<p>“- Juste avant d’arriver au château, nous allons boire de cette potion. Ses effets sont très efficaces et nous permettront de <strong class="mc">pouvoir mentir et résister aux interrogatoire bien plus efficacement.“</p>
<p>D’un coup <strong class="people">CHEF se tourne vers <strong class="mc"><strong class="people">JOURNALISTE et lui demande :</p>
<p>“- Ah ! Avez-vous les invitations ?”</p>
<p>Elle hoche la tête et tend les invitations à <strong class="people">CHEF</p>
<p>“- Gardez en une pour vous”</p>
<p><strong class="people">CHEF donne une invitation à <strong class="people">VOYANTE, une à <strong class="people">MONSTRE et garde la dernière.Il attends quelques secondes, puis demande :</p>
<p>“- Avez vous compris ? Avez-vous des questions ?”</p>
<p>“- Avez-vous mon paiement ?” demande <strong class="people">TELE de manière agressive</p>
<p>“- Oui, voici la 1er partie” répond <strong class="people">CHEF en sortant une des petites bourses de <strong class="mc">diamant que je lui ai fournis la veille. “Comme convenue, je vous donne la suite en sortant du chateaux”</p>
`, 14, ["pouvoir"]));
this.fragments.push(new Fragment(userService.soldat,
      ["mémoire","memoire"],
      `Sur la route de Martinvast - Il y a quelques minutes`,
      `<p>Le château se profile au bout de l’allée.</p>
<p>Très discrètement je touche la <strong class="mc">jambe&nbsp;de <strong class="people">ERUDIT. Elle me regarde et me sourit discrètement.</p>
<p>J’entend quelques petites tintement, <strong class="people">MONSTRE sort les fioles et commence à les distribuer aux autres puis prend la parole :</p>
<p>“- Buvez ça maintenant, ça va mettre quelque secondes à agir”</p>
<p>Tout le monde ouvre son falcon, je fais de même et boit son contenu d’une traite.</p>
<p>“- Hum, c’est bon ton médicament, docteur !” s’exclame <strong class="people">VOYANTE</p>
<p>Je ne sens rien de spéciale, ma <strong class="mc">mémoire ne semble pas encore disparaître. J’espère que le produit marche !</p>
<p>“- <strong class="mc">Rina … <strong class="mc">Rina c’est toi ? Arrêtez la voiture !” s’exclame <strong class="mc"><strong class="people">JOURNALISTE en fusillant <strong class="people">VOYANTE du regard, rouge de colère.</p>
<p>“- C’est un piège !” s’exclame <strong class="people">TELE.</p>
<p>Merde c’était pas prévu ça !</p>
`, 15));
this.fragments.push(new Fragment(userService.erudit,
      ["roberta","pollack"],
      `Londres, Colloque d’archéologie - 1929`,
      `<p>Ça commence à discuter dans la salle, l’auditoire ne me prend pas au sérieux.</p>
<p>“- C’est pourquoi je pense que vocaliser cette première phrase à modifié le 23ème glyphes. J’ai continué ainsi et pu faire varier la plupart des glyphes et comprendre le sens général.”</p>
<p>Quelqu’un m’interrompt :</p>
<p>“- Faites donc maintenant une démonstration ! Comment voulez vous que l’on crois à ses foutaises alors que vous nous montrez un simple page avec quelques trais.”</p>
<p>Je rougis, ce n’est pas possible, pas ici.</p>
<p>“- Ce document semble avoir besoin d’un source de <strong class="mc">pouvoir pour vivre. Il n’est pleinement utilisable qu’à proximité du site de fouille dans lequel il a été trouvé et semble rapidement perdre son <strong class="mc">pouvoir en s’éloignant à quelques kilomètres.”</p>
<p>J’entend des ricanements, je poursuis mon exposé. Certaines personnes quittent la salle et les autres sont agités. Je conclus enfin et après quelques applaudissements timides l’auditoire commence à quitter l’amphitéatre. Comme prévu personne ne m’a cru, tant pis pour eux.</p>
<p>Je commencer à ranger mes papiers répandu sur la table de l’estrade quand un monsieur (<strong class="people">CHEF) m’aborde :</p>
<p>“- Mademoiselle Broom, bravo pour votre exposé, votre analyse linguistique de ce document est remarquable !”</p>
<p>Je suis stupéfaite ! Quelqu’un m’aurait prise au sérieux ?</p>
<p>“- vous vous moquez de moi, vous aussi ?“ je demande</p>
<p>“- non, pas le moins de monde mademoiselle. Mais je crois que votre auditoire n’était pas prêt à recevoir votre message et je crois que vous être passé pour une mystique.”</p>
<p>Je me crispe. Une mystique, voilà pour quoi je passe ! Alors que je fais surement preuve de bien plus de rigueur scientifique que la plupart de … Il continue :</p>
<p>“- ce document en <strong class="mc">Kagana, comme vous l’appelez, est-ce le seul que vous possédez ? Où l’avez vous trouvé ?”</p>
<p>“- hum, c’est compliqué … Et pourquoi je devrais vous faire confiance ?” je répond prudemment</p>
<p><strong class="people">CHEF sourit et après quelques seconde à fouiller dans sa sacoche, il sort un petit carnet protégé dans un chiffon. Il me le tend. J’ouvre le carnet, et je vois avec emerveillement des caractère <strong class="mc">Kagana&nbsp;! Je tourne les pages, je vois des glyphes que je ne connais pas, des agencements étrange. Je tourne les pages de plus en plus vite, c’est merveilleux. Il y a 100 fois ce que j’ai sur ma simple page dans ce petit carnet !</p>
<p>“- c’est fabuleux, c’est &nbsp;un livre entier en <strong class="mc">Kagana&nbsp;! je demande</p>
<p>“- pensez-vous <strong class="mc">pouvoir m’aider à le traduire ?”</p>
<p>“- vu le nombre de page, ça devrait devenir bien plus facile de déduire la grammaire qu’avec ma page ! Il me faudra un peu de temps ... mais oui ! Ou l’avez-vous trouvé ?”</p>
<p><strong class="people">CHEF regarde derrière lui. La salle commence à se remplir pour la prochaine conférence. Il me demande :</p>
<p>“- la prochain conférence ne va pas tarder à commencer, cela vous dirait d’aller prendre un café pour parler de tout ça?”</p>
<p>“- Volontiers”</p>
<p>“-J’espère que &nbsp;vous aimez l’aventure&nbsp;:)”</p>
`, 0));
this.fragments.push(new Fragment(userService.erudit,
      ["grotte","grottes","grote","grotes"],
      `Afrique du sud, Site de fouille - Août 1931 - `,
      `<p><strong class="people">CHEF est silencieux mais son passage rapide devant un des projecteurs qui éclaire la <strong class="mc">grotte m’a mis la puce à l’oreille. Je l’ignore un instant, le temps de noter mes conclusions sur mon carnet. Ce mur est une <strong class="mc">mine d’information. Alors que <strong class="people">CHEF s’est approché derrière moi, je lui dit :</p>
<p>“- Comme je m’y attendais, ce ne sont pas des simples écrits. Il s’agit bien de textes planaires. Du <strong class="mc">plan des 5 lunes je pense. J’ai réussi à débloquer la première sécurité et j’ai accès à bien plus d’informations. Ce mur n’est que la couverture d’un livre. C’est étrange je reçois une partie de l’informations directement dans même tête sous forme de couleurs et de sons étrange.”</p>
<p>“- Et tu arrives à décoder des choses ? Tu as trouvé le moyen de créer des portails ?”</p>
<p>Je me lève et me retourne. Il a apporté le repas, il est si élégant. Je m’avance et l’embrasse tendrement puis m'assois à table et répond :</p>
<p>“- Non, mais il y a des informations très intéressantes sur les textes magiques. Apparemment certains livres peuvent voir leur contenu dépendre du lien entre les plans. Si le lien est coupé, le livre peut perdre une partie de son essence.”</p>
<p>“- Oh ! “ répond <strong class="people">CHEF. “Tu penses que ça peut expliquer les livres incohérents que je te ramènes de <strong class="mc">mission ?”</p>
<p>“- Oui, je pense que c’est la cause. La prochaine fois j’aimerais t’accompagner à une <strong class="mc">mission d’<strong class="mc">infiltration&nbsp;pour essayer de traduire des documents avant que le <strong class="mc">portail soit détruit et le lien soit coupé.”</p>
<p>Nous mangeons en discutant. À la fin du repas, <strong class="people">CHEF sors la petite boite et la pose ouverte devant moi. Elle contient une <strong class="mc">bague de fiancaille. Je ne dis rien, sourit et l’embrasse.</p>

<p></p>
<p class="italique">Je me souviens du <strong class="mc">Kagana avancé, et ses glyphes magiques. Il y a 10 glyphes magiques, leur ordre est important. Dans un document ou une tablette, il faut commencer par trouver les glyphes. Ensuite il faut les relier, mentalement ou en dessinant un croquis précis. Il faut relier tous les glyphes. Ça va donner un croisement quand il y a 4 glyphes mais ça peut être bien plus quand il y a plus de glyphes. Certains de ces croisements sont sur des mots. Je note le mot correspondant à chacun des croisements, j’ignore les autres.</p>
<p class="italique">Ensuite il faut que je trouve l’ordre des mots. Je note aussi les glyphes qui relient directement le croisement, (ceux avec un trait qui relie le croisement à ce glyphe sans passer par une autre croisement). J’ai souvent 2 glyphes relié directement à chaque croisement. Maintenant je dois trier les croisements : le croisement relié au glyphe de plus autre priorité dans l’ordre de l’alphabet sera le 1er croisement. Si il y a des égalités, on regarde le 2ème glyphe.</p>
<p class="italique">Une fois classés, je prendre tous les mots dans le bon ordre et je créer une formule, un grand mot qui met les mots des croisements bout à bout et je vocalise ou me concentre sur cette formule : si je ne me plante pas, le contenu <strong class="mc">magique du livre arrive dans mon esprit. L’alphabet a 10 glyphes, voici leur ordre :</p>
<div><img src="/assets/symbol_priority.png" /></div>
`, 1));
this.fragments.push(new Fragment(userService.erudit,
      ["mariage"],
      `France, Eglise - Mai 1932`,
      `<p>Nous entrons dans l'église de mon village natal, je sens le courant d’air frais glisser sur mon visage et je frissonne un instant dans ma robe de mariée. A mon bras, <strong class="people">SOLDAT m’accompagne à l’autel. Là bas, resplendissant, <strong class="people">CHEF m’attend avec un sourire.</p>
`, 2));
this.fragments.push(new Fragment(userService.erudit,
      ["infiltration","infiltrations","infilltration","ainfiltration"],
      `Paris, internat - 31 janvier 1935 - Recrue`,
      `<p>Je commence à devenir doué en <strong class="mc">infiltration. C’est un peu risqué de venir là chercher dans son <strong class="mc">internat mais cette petite mais si le contact dit vrai, cette petite est vraiment doué et nous aurons besoin d’elle. L’éthique de se recrutement me gène un peu mais l’enjeu est trop grand. PRINCIPAL fait entrer <strong class="people">VOYANTE et la fait asseoir de l’autre coté de bureau.</p>
<p>PRINCIPAL dit à <strong class="people">VOYANTE en me montrant :</p>
<p>“- Ha, <strong class="mc">Rina, je t’ai convoqué parce que Mme <strong class="mc">Pollack a quelque chose d’important à te dire.”</p>
<p>Puis PRINCIPAL me dit avant de sortir du bureau :</p>
<p>“- je vous laisse mon bureau. Quand vous aurez terminé, demander à ma secrétaire de vous raccompagner. ”</p>
<p>Je regarde <strong class="people">VOYANTE, elle fait très jeune, 14 ou 15 ans je dirais. Elle a l’aire plus intriguée que apeurée et elle transpire l'intelligence. Je lui dit :</p>
<p>“- J’ai dit à ton principal que je venais pour raison familial urgente, mais en fait je dois te parler de quelque chose de très important. Je sais que tu peux avoir des visions, et que ce que tu vois et toujours vrai...”</p>
<p>“- Comment savez vous ça !”</p>
<p>“- Ça n’a pas d’importance, je peux juste te dire que je sais certaines choses qui pourraient t’intéresser à propos de tes visions”</p>
<p>“- C’est vrai ? Vous savez comment j’ai eu ce <strong class="mc">pouvoir ? d’où il vient ?”</p>
<p>“- Je peux répondre à beaucoup de tes questions, mais je ne pense pas que le bureau du principal soit le bon endroit. Et je suis venu parce que mon mari et moi avons besoin de ton aide.”</p>
<p>“- Ok, pourquoi vous avez besoin de moi ? C’est pour *voir* quelque chose ?”</p>
<p>“- Oui, c’est pour *voir* quelque chose. Si ça te convient, je vais trouver une excuse pour que tu puisse partir avec moi aujourd’hui. Tu pourras nous rendre ce petit service&nbsp;et en échange, je te dirais tout ce que je sais sur tes capacitées.”</p>
<p>“- Ça marche, de toute façon je n’avais pas envie de retourner en cours de math...”</p>
`, 3));
this.fragments.push(new Fragment(userService.erudit,
      ["jambe","jambes"],
      `Versailles, Chambre - 1935`,
      `<p>Quelque chose caresse mon dos nu et me réveille. Le <strong class="mc">soleil se lève. Derrière moi, <strong class="people">SOLDAT m’enlace. Je souris et me rendors.</p>
`, 4));
this.fragments.push(new Fragment(userService.erudit,
      ["psycheide","psycheïde","psycheïdes","psicheide"],
      `Versailles, Jardin - Septembre 1936 - Mission`,
      `<p>“- Il est là” je dis</p>
<p><strong class="people">SOLDAT nous rejoint. <strong class="people">CHEF se retourne vers lui. Il a vraiment l’air angoissée. Ça a l’air grave. Nous reprenons la marche et au bout de quelques seconde <strong class="people">CHEF annonce :</p>
<p>“- comme vous vous en doutez, on a une nouvelle <strong class="mc">mission. Mais celle là a l’air particulièrement délicate est dangereuse.”</p>
<p>“- Vous étiez donc à nouveau auprès d’un contact hier ? C’était elle ?” demande <strong class="people">SOLDAT</p>
<p>“- Non, ce n’était pas elle. Des <strong class="mc">Psycheïdes&nbsp;je crois. Ils sont en panique et on a juste 1 mois pour se préparer.”</p>
`, 5));
this.fragments.push(new Fragment(userService.erudit,
      ["commando","comando"],
      `Versailles, Jardin - Septembre 1936 - Dahona`,
      `<p>Il marque une pause. Se tourne vers moi et demande :</p>
<p>“- Les <strong class="mc">Dahona, ça te parle ?”</p>
<p>“- Oui, mais je n’ai pas lu beaucoup de détail sur eux. Ils sont un peu comme nos ogres dans nos histoires pour enfants j’ai l’impression. Il y a un certain tabou à leur propos. Ils existent vraiment ?”</p>
<p>“- Apriori, et il semblent qu’ils aient fait un lien vers notre <strong class="mc">plan, au château de <strong class="mc">Martinvast. Ils planifierait un <strong class="mc">attentat à l’occasion d’un <strong class="mc">mariage le 28 octobre, en violation de tous les traités de neutralité. Et il y aurait pas mal de notable et célébrité humaines.. Mon contact a subtilement évité ma question sur le genre d’<strong class="mc">attentat que les <strong class="mc">Dahona pensent faire. ”</p>
<p>“- Bref, ils vont tous les tuer, d’une manière ou d’une autre, c’est ça ?” &nbsp;conclus <strong class="people">SOLDAT</p>
<p>“- On va supposer que c’est ça.” répond <strong class="people">CHEF.</p>
<p>Je demande :</p>
<p>“- Et il ne suffit pas de faire sauter le <strong class="mc">portail, comme d’habitude ?”</p>
<p>“- Oui et non, apparement le châteaux et particulièrement protégé et les <strong class="mc">Dahona se montrent prudent. Les <strong class="mc">Dahona ouvrent le <strong class="mc">portail avec une très grande modération. Ils se sont installé avec beaucoup de discrétion. Ils sont actuellement absent mais prévoient d’ouvrir le <strong class="mc">portail pour revenir juste avant la cérémonie. Ça sera la seul opportunité.”</p>
<p><strong class="people">SOLDAT ajoute :</p>
<p>“- Vu qu’il y aura surement des civils ou innocents dans le coin, je suppose que je devrais préparer une bombe de puissance modérée, pour détruire le lien sans détruire tout le château...”</p>
<p>“- bien vu, ça veut dire qu’il faudra se montrer précis sur la localisation du <strong class="mc">portail, on ne peut pas se permettre de le louper” j’ajoute</p>
<p>“- &nbsp;Oui, et autant mon contact m’a dit qu’il devrait <strong class="mc">pouvoir trouver l’heure exacte d’ouverture du <strong class="mc">portail autant personne ne sait à quoi il ressemblera et ou il arrivera.”</p>
<p>Alors que le silence tombe, on arrive au fond du jardin et <strong class="people">CHEF déverrouille le cabanon, et reprend en entrant:</p>
<p>“- Pour la sécurité, il y a 2 points gênants. D’abord il y a un champ statique autour du chateaux…”</p>
<p>“- donc on ne pourra pas faire téléporter d’objet à l’intérieur du château. Un <strong class="mc">télékinésiste pourrait téléporter la bombe s’il est déjà à l'intérieur du champ statique.” je le coupe</p>
<p>“- oui, mais il faudra trouver un téléporteur humanoïde, sinon il ne passera pas les portes du château.”</p>
<p>“- Ah mince. Je suppose que ça existe mais il va falloir se bouger pour en trouver un à temps.”</p>
<p><strong class="people">CHEF descend l'échelle sous la <strong class="mc">trappe. <strong class="people">SOLDAT me laisse passer et il ferme la <strong class="mc">trappe derrière lui. Je vais chercher quelque livres sur différent aspect des mondes planaires dans mes bibliothèque et je les lance sur la grande table au centre du repère. <strong class="people">CHEF a entrepris de nettoyer le tableau noir. <strong class="people">SOLDAT à servir 3 verres.</p>
<p>“- D’autre part, mon contact m’a dit qu’il y aura des statues à l’entrée.” reprend <strong class="people">CHEF</p>
<p>“- Donc ce qui veut dire qu’on sera découvert dès que l’un de nous rentre dans ce chateaux” je répond.</p>
<p>J’ouvre le livre sur les statues&nbsp;pour vérifier un doute.</p>
<p>“- Oui, mais mon contact m’a dit qu’il me fournirait quelqu’un pour ça : il peut provoquer une amnésie temporaire. Ainsi les pensées ne pourront plus nous trahir mais d’un autre côté on ne se souviendra plus de pourquoi on est là bas. La <strong class="mc">mémoire nous reviendra petit à petit, mais des déclencheurs peuvent nous aider à retrouver des parcelles spécifique de <strong class="mc">mémoire. ”</p>
<p>“- On a qu’a tout écrire et on arrivera bien fouiller nos poches sur place pour lire nos notes et réactiver nos souvenirs ...” dit <strong class="people">SOLDAT</p>
<p>“- Non, c’est pas si simple.” je le coupe en montrant mon livre “ écoutez : ‘[...] les statues sont capables de capter des brides de pensées quelque soit leur support, pour elle un livre ne diffère pas d’un cerveau [...]’. Donc si on vient avec notre <strong class="mc">plan dans la poche, ça sera exactement comme l’avoir en tête. Il va falloir tout camoufler dans des indices futiles et décoder l’ensemble sur place.”</p>
`, 6, ["pouvoir"]));
this.fragments.push(new Fragment(userService.erudit,
      ["codex"],
      `Versailles, Jardin - Septembre 1936 - Le plan`,
      `<p>Tout notion d’heure a disparu, je n’ai plus aucune idée de combien de temps nous travaillons au repère. Le <strong class="mc">plan prend forme au tableau. <strong class="people">CHEF semble soulagé et dit:</p>
<p>“- Bon, je résume. On trouve des invitations pour le <strong class="mc">mariage et on y rentre comme invité en ayant oublié notre <strong class="mc">mémoire. On arrive en avance, on devrait nous faire patienter dans un petit salon. <strong class="mc">Maurice, tu auras une bombe avec toi, préprogrammé à la bonne heure, au cas ou on oublie. Sur place, il faudra localiser l’emplacement ou le <strong class="mc">portail va s’ouvrir. <strong class="mc">Roberta, tu es assez confiante sur le fait que sur place il y aura de la documentation sur leur <strong class="mc">plan ?”</p>
<p>“ - Oui, quand des planaires s’installent ils viennent habituellement avec leurs possessions, il est trop dangereux et coûteux de devoir ouvrir le <strong class="mc">portail à chaque fois qu’ils on besoin d’un livre ou d’un objet quelconque.” je répond</p>
<p>“ - Donc sur place, <strong class="mc">Rina cherche les livres dans les pièces. Avec l’aide du <strong class="mc">plan, on les localise et le <strong class="mc">télékinésiste les récupère. Là, on trouve les informations sur le <strong class="mc">portail au plus vite. Tu es bien sûr qu’elles y seront ?”</p>
<p>“- Oui. C’est vitale d’avoir ça, sans les informations d’ouverture de <strong class="mc">portail tu prend le risque d’être bloqué à tout jamais si le lien se casse. Personne ne va sur un autre <strong class="mc">plan sans un <strong class="mc">codex&nbsp;d’ouverture de <strong class="mc">portail.” je répond</p>
<p>“- Un fois qu’on a trouvé où sera le <strong class="mc">portail, <strong class="mc">Rina trouve l’endroit et on téléporte la bombe là bas.”</p>
<p>“- Oui, et je viens quand même. Si on ne trouve pas, ça peut être pas mal de <strong class="mc">pouvoir désamorcer la bombe.” ajoute <strong class="people">SOLDAT.</p>
<p><strong class="people">CHEF continue :</p>
<p>“- Oui. Donc, <strong class="mc">Roberta, tu t’occupes de parler de cette <strong class="mc">mission à <strong class="mc">Rina. <strong class="mc">Maurice, tu prépare la bombe, il ne faut aucune écriture dessus ! Je vais arranger le transport et la logistique pour avoir un endroit ou se préparer avant le <strong class="mc">mariage. Je connais le patron du <strong class="mc">bar Mortebière&nbsp;à Caen par exemple. En parallèle, tout le monde cherche ‘discrètement’ un moyen d’avoir les invitations au <strong class="mc">mariage et le <strong class="mc">plan du chateaux. Ah et bien sur, enquêtez pour trouver un <strong class="mc">télékinésiste !”</p>
`, 7, ["pouvoir"]));
this.fragments.push(new Fragment(userService.erudit,
      ["attentat","attenta","atenta","atentat","attantat","attanta","atanta"],
      `Paris, Le salon de thé Angelina rivoli - 3 octobre 1936`,
      `<p><strong class="people">VOYANTE est déjà là quand j’arrive dans le salon de thé. J’espère qu’elle n’a pas trop attendu. Je m’assois à sa table et je lui dis :</p>
<p>“- Désolé, <strong class="mc">Rina je suis un peu en retard.”</p>
<p>“- Ce n’est rien madame, pourquoi vouliez vous me voire ?”</p>
<p>“- J’ai une nouvelle <strong class="mc">mission à te proposer. Avant de t’en dire plus, il faut que je te prévienne que c’est une <strong class="mc">mission extrêmement dangereuse. Mais aussi très importante, sinon je ne ferais pas appel à toi. Tu peux donc refuser.”</p>
<p>“- Ça m’est égale que ce soit dangereux. Je suis partante !”</p>
<p>“- Attend un peu d’avoir quelques détails… On va essayer de déjouer un <strong class="mc">attentat, mais on risque bien d’y passer nous même. Et on a pas encore réussi à recruter tous les talents dont on a besoin. Est-tu sûr que tu veux venir ?”</p>
<p>“- Si je ne viens pas vous tenterez quand même d'arrêter l’<strong class="mc">attentat, n’est-ce pas ?”</p>
<p>“- Oui, les enjeux sont trop importants.”</p>
<p>“- Alors je viens. Vous aurez besoins de mes visions.”</p>
<p>“- Très bien, je pensais bien <strong class="mc">pouvoir compter sur toi. L’<strong class="mc">attentat doit avoir lieu le 28 octobre, lors d’un <strong class="mc">mariage. As-tu une tenu de soirée qui pourrait convenir à un <strong class="mc">mariage ?”</p>
<p>“- Oui, je dois avoir ce qu’il faut. Et je connais une personne qui a un talent pour ce genre d’opération. Est-ce que je peux la contacter ?”</p>
<p>“- On recherche quelqu’un qui a des compétences très particulières, mais qui sait, peut être que cette personne pourra convenir.” j’ajoute en lui tendant ma carte :</p>
<p>“- Dites lui de me contacter directement, et assez rapidement, mais ne lui dite rien d’autre.“</p>
<p>“- D’accord”</p>
`, 8));
this.fragments.push(new Fragment(userService.erudit,
      ["plan"],
      `Paris - 4 octobre 1936 - Plan`,
      `<p>J’arrive, dans le café. Je vois <strong class="mc"><strong class="people">JOURNALISTE. Elle ressemble vraiment à sa fille. Quelle coïncidence tout de même que quelqu’un d’autre s’intéresse à <strong class="mc">Martinvast&nbsp;!</p>
<p>Je m’approche. Je regarde <strong class="mc"><strong class="people">JOURNALISTE et lui demande :</p>
<p>“- <strong class="mc">Louise&nbsp;?”</p>
<p>“- Oui c’est moi”</p>
<p>Je m’assois à sa table. Un <strong class="mc">plan est posé sur la table, je l’examine et dit :</p>
<p>“- Ha c’est le <strong class="mc">plan du château, bien joué !”</p>
<p>“- Merci, ça n’a pas été facile à trouver. Vous avez mon argent ?”</p>
<p>Je laisse tomber trois <strong class="mc">diamant sur la table, et dit :</p>
<p>“- J’ai un autre service à vous demander, j’ai besoin d’invitations pour le <strong class="mc">mariage qui a lieux le 28 au château”</p>
<p>“- Ha oui le <strong class="mc">mariage de Hector de La Grande Marche, je pense que je peux vous avoir ça. Par contre je ne veux pas être payé en <strong class="mc">diamant, j’ai plutôt une autre idée”</p>
<p><strong class="mc"><strong class="people">JOURNALISTE ouvre la 1er page de son cahier et me le temps. Je vois la célèbre estampe japonaise représentant une <strong class="mc">vague. Elle me demande :</p>
<p>“- Ça vous parle ?”</p>
`, 9));
this.fragments.push(new Fragment(userService.erudit,
      ["kanagawa"],
      `Paris - 4 octobre 1936 - Tableau`,
      `<p>“- Oui, c’est la grande <strong class="mc">vague de <strong class="mc">Kanagawa, il me semble que ce tableau a été volé l’année dernière”</p>
<p>“- J'enquête dessus, et je pense que le tableau se trouve dans ce château. J’aimerai vous accompagner, le retrouver te le restituer aux autorités.”</p>
<p>“- Et si le tableau ne s’y trouve pas”</p>
<p>“- Alors je vous aurais fournis les entrées gratuitement”</p>
<p>“- Ok, mais sachez que ça sera très dangereux. Vous serez responsable d'amener les plans du château avec vous, Et de vous assurer que si vous êtes fouillée ou interrogé on ne puisse pas savoir ce que vous transportez”</p>
<p>On passe le reste de la matinée à mettre au point la meilleur méthode pour cacher le <strong class="mc">plan.</p>
<p>On a décidé de cacher les informations sur des dessins dans un <strong class="mc">poème. Elle a l’air de ne pas pourquoi prendre ce genre de mesure mais je ne peux pas lui en dire trop.</p>
`, 10));
this.fragments.push(new Fragment(userService.erudit,
      ["lettre"],
      `Versailles, Repère - 1936 - Préparation`,
      `<p><strong class="people">SOLDAT bricole dans le coin du repère. Je règle avec <strong class="people">CHEF les derniers détails du <strong class="mc">plan. Je lui annonce :</p>
<p>“- C’est bon, le contact de <strong class="mc">Rina était fiable. On a notre <strong class="mc">télékinésiste, je lui ai demandé d’apprendre par coeur une formule pour récupérer directement de livre de la bibliothèque.”</p>
<p>“- Bien. Et c’est bon pour la <strong class="mc">journaliste ?”</p>
<p>“- Oui, elle a bien travaillé. Elle m’a envoyé une ébauche de son <strong class="mc">plan, elle a bien bossé.”</p>
<p>Il semble se détendre. J’ajoute :</p>
<p>“- Ah, et pour <strong class="mc">Rina, tu devras l’appeler <strong class="mc">Suzanne. J’ai aussi donné cette consigne à <strong class="mc">Rina et elle aura une grande cape pour ne pas être reconnue.”</p>
<p>“- Bonne idée, ça évitera d’avoir à gérer la surprise.”</p>
<p>La conversation se poursuit et dérive. On se permet même de parler de notre projet de plantation de flore planaire dans la serre du domaine. A un moment j’entend <strong class="people">SOLDAT bougonner une question.pose une question.</p>
<p>“ - vous pouvez me donner 2 nombres entre 0 et 63 ?”</p>
<p>Je lui répond.</p>
<p>“ - 15&nbsp;et 53, ça irait ?”</p>
<p>Puis je reprend la conversation avec <strong class="people">CHEF</p>
`, 11));
this.fragments.push(new Fragment(userService.erudit,
      ["mortebiere"],
      `Caen, Bar - Ce midi - Le briefing`,
      `<p>Je frappe à la porte au fond du <strong class="mc">bar. Après quelques seconde, j’entend 1 coup sourd. Je répond 3 coups en réponse, comme convenu. La porte se déverrouille, <strong class="people">CHEF me laisse entrer et je fais signe à <strong class="people">VOYANTE de me suivre.</p>
<p>Après quelque secondes <strong class="people">CHEF pousse un soupir et prend la parole :</p>
<p>“- Bonjour à tous. Merci d’être là à l’heure. Pour des raisons de sécurité, vous n’avez pas été tenu de la nature exacte de cette opération. Normalement on vous a prévenu que la <strong class="mc">mission était dangereuse.”</p>
<p>“- Oui, ils ont tous accepté en connaissance de cause.” je confirme</p>
<p><strong class="people">CHEF continue :</p>
<p>“- Le but de notre opération est d'empêcher un <strong class="mc">attentat en &nbsp;… commettant un <strong class="mc">attentat pour éliminer la menace. Nous irons ce soir au châteaux nous infiltrer au <strong class="mc">mariage de Hector de La Grande Marche et Marie Elisabeth d’Autriche. Ce <strong class="mc">mariage c’est qu’un prétexte pour inviter une grande quantité de notable et dirigeant dans le but de les assassiner.</p>
<p>Nous savons que l’<strong class="mc">attentat surviendra quand tout le monde sera rassemblé dans la grande salle, à partir de minuit. Nous avons une bombe et notre seule chance d'empêcher le massacre est de la faire exploser exactement au bon moment et au bon endroit pour éliminer les terroristes à leur arrivée.”</p>
<p>“- Pourquoi ce n’est pas la police qui s’occupe de ça ?” &nbsp;demande <strong class="mc"><strong class="people">JOURNALISTE</p>
<p>“- C’est une <strong class="mc">mission délicate, et les instances dirigeantes préfères ne pas être impliquées. C’est pour ça que nous sommes chargés de résoudre le problème discrètement.” répond <strong class="people">CHEF.</p>
<p>“- Et je suppose que vous savez comment faire ?” demande <strong class="people">TELE</p>
<p>“- Oui, nous savons de source sûre l’heure exacte à la bombe doit exploser. Et celle-ci est d’ailleurs déjà configurée” répond <strong class="people">CHEF en montrant la valise sur la table près de moi</p>
<p>“- Et pour l’emplacement ? C’est habituellement plus simple à savoir !” relance-elle</p>
<p>“- <strong class="mc">Roberta, avec l’aide de <strong class="mc">Suzanne se chargera de localiser l’emplacement, et comme vous vous en doutez, vous serez chargé de placer la bombe.”</p>
<p>Bien, il a pensé à l’alias de <strong class="people">VOYANTE.</p>
<p>“- Ma carte servira à ce moment ? demande <strong class="mc"><strong class="people">JOURNALISTE</p>
<p>“- Oui, vous fournirez le <strong class="mc">plan du château pour aider à la localisation du por… de l’emplacement. Et de ce que vous cherchez dans le château par la même occasion.”</p>
<p>“- oui …” répond t’elle, “j’ai le <strong class="mc">plan, enfin partiellement dessiné. Je ne vois toujours pas vraiment en quoi vos instructions vont nous aider vu que je sais comment mon camouflage fonctionne. Si je suis interrogé et menacé je ne vous promet pas de ne rien révéler.”</p>
<p>“Ne vous inquiétez pas, c’est là que notre dernier équipier intervient”.</p>
<p><strong class="people">CHEF se tourne vers la dernière personne tapis dans l’ombre.</p>
<p>“- Monsieur, comment dois-je vous appeler ?”</p>
<p>“- Heu … Jules … oui, c’est ça, Docteur Jules”</p>
<p>“- Bien docteur, vous avez la potion promise ?”</p>
<p>“- Oui, bien sûr la voilà” répond <strong class="people">MONSTRE en montrant un petit flacon.</p>
<p>“- Juste avant d’arriver au château, nous allons boire de cette potion. Ses effets sont très efficaces et nous permettront de <strong class="mc">pouvoir mentir et résister aux interrogatoire bien plus efficacement.“</p>
<p>D’un coup <strong class="people">CHEF se tourne vers <strong class="mc"><strong class="people">JOURNALISTE et lui demande :</p>
<p>“- Ah ! Avez-vous les invitations ?”</p>
<p>Elle hoche la tête et tend 4 cartons à <strong class="people">CHEF qui lui en prend 3.</p>
<p>“- Gardez en une pour vous”</p>
<p><strong class="people">CHEF donne une invitation à <strong class="people">VOYANTE, une à <strong class="people">MONSTRE et garde la dernière.Il attends quelques secondes, puis demande :</p>
<p>“- Avez vous compris ? Avez-vous des questions ?”</p>
<p>“- Avez-vous mon paiement ?” demande <strong class="people">TELE de manière agressive</p>
<p>“- Oui, voici la 1er partie” répond <strong class="people">CHEF en sortant une des petites bourses de <strong class="mc">diamant que je lui ai fournis la veille. “Comme convenue, je vous donne la suite en sortant du chateaux”</p>
`, 12, ["pouvoir"]));
this.fragments.push(new Fragment(userService.erudit,
      ["mémoire","memoire"],
      `Sur la route de Martinvast - Il y a quelques minutes`,
      `<p>Le château se profile au bout de l’allée. J’espère que je trouverais enfin un livre qui parle de la création de <strong class="mc">portail.</p>
<p>La main <strong class="people">SOLDAT effleure subtilement ma <strong class="mc">jambe, je croise son regard et lui sourit.</p>
<p>J’entend quelques petites tintement, <strong class="people">MONSTRE sort les fioles et commence à les distribuer aux autres puis prend la parole :</p>
<p>“- Buvez ça maintenant, ça va mettre quelque secondes à agir”</p>
<p>Tout le monde ouvre son falcon, je fais de même et boit son contenu d’une traite.</p>
<p>“- Hum, c’est bon ton médicament, docteur !” s’exclame <strong class="people">VOYANTE</p>
<p>Je ne sens rien de spéciale, ma <strong class="mc">mémoire ne semble pas encore disparaître. J’espère que le produit marche !</p>
<p>“- <strong class="mc">Rina … <strong class="mc">Rina c’est toi ? Arrêtez la voiture !” s’exclame <strong class="mc"><strong class="people">JOURNALISTE en fusillant <strong class="people">VOYANTE du regard, rouge de colère.</p>
<p>“- C’est un piège !” s’exclame <strong class="people">TELE.</p>
<p>Mince, quelle horreur, je savais que c’était une mauvaise idée de laisser <strong class="mc"><strong class="people">JOURNALISTE venir !</p>
`, 13));
this.fragments.push(new Fragment(userService.erudit,
      ["thyrapoedae"],
      `★ “I know kung fu” ★`,
      `<p>En lisant ce chapitre un <strong class="mc">pouvoir s’insinue en moi. Je sais maintenant comment on crée des portails !</p>
`, 14));
this.fragments.push(new Fragment(userService.erudit,
      ["planmagiepouvoir"],
      `📖 Le grand livre des pouvoirs: Introduction aux pouvoirs 📖`,
      `<p>Chaque plan diffusent un champ de magie&nbsp;différent. Cela se traduit pas des pouvoirs magique spécifique par plan. Chaque pouvoir&nbsp;ne fonctionne que si l’on se trouve dans le champ de magie correspondant.</p>
<p>Les liens entre portail laissent fuiter un peu de champs de magie dans les environs du point d’accroche du lien. Cela permet d’utiliser partiellement des pouvoirs magique ailleurs que sur le plan d’origine.</p>
<p>Voici un résumé des pouvoirs des plans les plus connus. Selon les derniers travaux des Sirinéen, il existerait des milliers de plan et de pouvoirs, mais la diversité des environnements et les connaissances lacunaire en théorie de portail rend leur documentation lente et difficile.</p>
`, 15));
this.fragments.push(new Fragment(userService.erudit,
      ["mental"],
      `📖 Le grand livre des pouvoirs: Pouvoir des Psychéides 📖`,
      `<p>Les psychéides ont toute sorte de pouvoirs lié au mental.</p>
<p>Les psychéïdes possède une gamme de pouvoir très vaste.</p>
<p>La plupart des psychéïdes n’ont qu’un seul pouvoir mais certains en cumulent plusieurs. Les pouvoirs maîtrisés par un psychéide ne sont pas héréditaire.</p>
<p>Dans les cas les plus classique on trouve les télépathes qui peuvent échanger par la pensée.</p>
<p>D’autre, &nbsp;surnommés les statues ont le pouvoir de lire dans les pensées, sans l’accord de leur propriétaire. Il paraîtrait que les statues les plus expérimentés arrivent à lire des pensées sur support écrit.</p>
<p>On trouve aussi plusieurs variante de voyance. Certains peuvent voir des reflux du passé du lieu dans lequel ils se trouvent. D’autre peuvent voir d’autres lieux, parfois même sur d’autre plans, mais uniquement au présent. Il ne semble pas exister de voyant pouvant voir n’importe où dans le passé.</p>
<p>Un dernier pouvoir souvent dénigré chez les psychéïdes est l’effacement de mémoire. Ce pouvoir n’a en effet peu d'applications pacifiques et est principalement utilisé dans le domaine du crime ou en combat. L’effacement de mémoire peut être éphémère ou permanent en fonction de la puissance émise par le psychéïde, la puissance est difficile à réguler. Certains des effaceurs les plus puissants arrivent à cibler un groupe entier.</p>
`, 16));
this.fragments.push(new Fragment(userService.erudit,
      ["avantagesformesirinéen"],
      `📖 Le grand livre des pouvoirs: Pouvoir des Sirinéen 📖`,
      `<p>Les Sirinéen&nbsp;peuvent généralement changer de forme&nbsp;ce qui leur donne de nombreux avantages.</p>
<p>Leur art de l’imitation peut être très bonne, allant même jusqu'à reproduire les métabolismes des créatures copiées. Il est parfois possible de combiner plusieurs métabolismes pour cumuler les avantages de plusieurs forme de vie.</p>
<p>Certains artistes Sirinéen ont commencé à inventer des formes sorties uniquement de leur imagination et avec l’aide de scientifique ils ont conçu des formes particulièrement résistantes pour explorer des lieux hostiles jusqu’à lors inaccessibles.</p>
<p>De par leur adaptativité les Sirinéen sont de grands voyageurs et s’installent sur de nombreux plan.</p>
<p>La vitesse de changement de forme peut être longue, parfois plusieurs mois pour changer totalement de forme, mais des changements rapides et très localisé peuvent être effectués, ce qui permet aux Sirinéen de &nbsp;se régénérer et ils sont considérés comme amortel.</p>
<p>Même si les conventions planaire l'interdisent, il semblerait que leur capacité à imiter les métabolismes permet parfois une copulation fertile et a permis la naissance d’hybride cumulant les pouvoirs de plusieurs plans. Les hybrides sont très rarement fertiles à leur tour et la transmission de pouvoirs et encore plus rare dans ce cas.</p>
`, 17));
this.fragments.push(new Fragment(userService.erudit,
      ["systématiquesdahonaincompatibilité"],
      `📖 Le grand livre des pouvoirs: Pouvoir des Dahona 📖`,
      `<p>Les Dahona&nbsp;sont connus pour leur exactions systématiques&nbsp;et leur incompatibilité&nbsp;avec toute vie en communauté.</p>
<p>Les Dahona sont les créatures les plus dangereuses que l’on connaisse.</p>
<p>Leur terrible pouvoir est appelé absorption : il consiste à dévorer une victime, et absorber tout ce qui la constitue : son esprit, ses souvenirs, ses compétences, physiques et intellectuelles et ses pouvoirs. L'absorption peut être vu comme une fusion des êtres mais le Dahona reste le maître, il n’est jamais dilué par sa victime.</p>
<p>Leur schéma est classique, un chef de guerre et sa horde arrive à créer un lien avec un plan, ils envoient une tête de pont pour récolter des informations sur le plan, souvent par absorption discrete. Ils s’installent dans un repère, souvent un grande maison un peu à l’écart. Le repère et toujours décoré avec l’emblème du chef, qui est presque systématiquement un animal,</p>
<p>Après un temps de préparation et d’incubation variable où ils sont irréprochable et s’intègrent dans le plan, ils organisent une cérémonie mimant les moeurs du plan ciblé.</p>
<p>Un dévorage massif va être organisée durant cette cérémonie, souvent une fête de tradition typique du plan attaqué. Grâce à leur réseau monté pendant l’incubation ils réunissent une grande quantité de notables de ce plan. Le chef de guerre va souvent inviter d’autre chef de guerre pour partager le festin. Le chef va absorber la plus belle prise et offrir les prises avec le plus de connaissance, pouvoir politique, information scientifique, etc, à ses amis.</p>
<p>Apès un dévorage réussi, les Dahona sortent souvent de leur clandestinité et multiplient les dévorages. Leur 1er dévorage aura souvent décapité une partie de l’élite du plan envahis et les absorbsions leur auront donné une grande quantité des connaissances sur le plan, ce qui les rend encore plus dangereux.</p>
<p>Parfois les Dahona rentre dans la clandestinité à nouveau.</p>
<p>Les pouvoirs et les savoirs accumulés par les Dahona au fil du temps devient préoccupant. Même s’il ne sont pas très bon pour utiliser les pouvoirs, à force d'absorption ils sont devenu dangereux dans certains domaines comme le contrôle mental.</p>
<p>Les Dahona ont des faiblesses, notamment leur confiance en eux, leur régularité, et leur bureaucratie. Ils sont extrêmement procéduriers et vont planifier leurs actions et cérémonies à la minute prêt. Ils écrivent beaucoup de documentations et ne mettent pas beaucoup de zèle à effacer leurs traces quand ils disparaissent. Cela permet de trouver quasi systématiquement leur plan d’organisation dans des classeurs ou même des feuilles volantes dans les lieux infiltrés.</p>
<p>Cette vulnérabilité est l’axe d’attaque principal pour contrecarrer les dévorages.</p>
<p>Quand ils ne sont pas en train de nous dévorer, ils sont jovials, distingués et cultivés. Ils n’ont pas de haine pour les peuble dévorés, mais leur faim finit toujours par couper court à leur relations amicales initiale.</p>
`, 18));
this.fragments.push(new Fragment(userService.erudit,
      ["bâtisseurstélékinésiebeaucoup","batisseurstelekinesiebeaucoup","bâtisseurstelekinesiebeaucoup","batisseurstélékinesiebeaucoup","batisseurstélekinesiebeaucoup","batisseurstelékinesiebeaucoup"],
      `📖 Le grand livre des pouvoirs: Pouvoir des Nemateliques 📖`,
      `<p>Les Némateliques sont un peuple bâtisseurs. Leur différents pouvoirs de télékinésie&nbsp;les ont beaucoup&nbsp;aidé dans cette tâche.</p>
<p>Les Némateliques sont organisé en tribus et chacune a développé des manières différentes d’utiliser les pouvoirs de télékinésie, avec des syntaxe spécifique et des effets très variables.</p>
<p>Le Natagasm est l’art de déplacer des objets à plusieurs. Les objets peuvent être énormes, comme des rochers, pierres, poutre, ou même des masses d’eau ou des outils.</p>
<p>Cette technique permet de déplacer des très gros objets mais très lentement. Mais les shamans ont développé des moyens de mettre en commun les pouvoirs des dizaines, centaines ou même milliers d’individus. La vitesse de déplacement des objets ou leur masse augmente sensiblement avec le nombre et la puissance des individus.</p>
<p>Ces techniques de fusion de pouvoir mentale sont uniques.</p>
<p>Le Natagasm nécessité de voir l’objet et les individus peuvent seulement pousser ou tirer l’objet. Ainsi les ingénieurs doivent concevoir des structures ou échafaudages et répartir les bâtisseurs en plusieurs groupe pour contrôler les trajectoirs complexes des outils ou matériaux de constructions dans les chantiers.</p>
<p>Le Gadoulisme permet lui de téléporter des objets. Contrairement aux autres techniques de télékinésie, les objets déplacés par le Gadoulisme le sont instantanément. L'objet déplacé suis tout de même un chemin mais ce chemin peut être partiellement obstrué : il est en effet possible de traverser du verre, du bois ou même des matériaux plus dense si le télékinésiste est très puissant.</p>
<p>Le Gadoulisme ne nécessite ni de voir l’objet, ni de voir le chemin, mais une mentalisation accompagné d’un incantation permet de désigner le trajet. Il est alors possible d’envoyer ou récupérer un objet, au choix.</p>
<p>Les objets déplacé par le Gadoulisme doivent être de petite taille. La masse d'objets déplacé dépend de la puissance du praticien.</p>
<p>Le Nijika est une pratique ancienne mais très difficile pratiquée que par quelque individus. Elle reste mystérieuse mais elle consiste à déplacer des milliers de particules à la fois, parfois invisible et de ressentir leur mouvement et ainsi développer une visualisation à plusieurs échelle. En prenant des particules très groupés il est possible de sentir la structure de choses microscopique mais il est possible d’étendre l’échelle en sacrifiant de la précision pour palper une personne, une maison, une ville, ou même un paysage.</p>
`, 19));
this.fragments.push(new Fragment(userService.erudit,
      ["pouvoirincroyablementhumains"],
      `📖 Le grand livre des pouvoirs: Cas particulier des humains 📖`,
      `<p>Les humains&nbsp;sont incroyablement&nbsp;faible. Ils n’ont aucun pouvoir&nbsp;magique.</p>
<p>Leurs capacités physiques ne sont pas non plus extraordinaires. De plus, la plupart des humains ne sont pas au courant de l'existence de la magie, et des autres plans. C’est un plan qui n’attire pas beaucoup de convoitise, et il est resté assez inaperçu pendant plusieurs siècles.</p>
<p>Du fait de l'absence de magie, le plan des humains et idéal pour créer des liens et des portails. Les portails vers le plan humain laissent très bien passer la magie, et sa puissance décroît assez lentement quand on s’éloigne du portail.</p>
<p>Ça en fait plan idéal pour les rencontres diplomatiques, les réfugiés politiques, ou même des vacances dépaysantes. Une règle tacite existe à travers l’ensemble des plans connus, le plan des humains, et la terre reste une zone neutre. Depuis environ 2 décennies cette règle est devenue officielle pendant le ‘Grand Sommet Interplanaire pour une paix magique’ de 1912.</p>
<p>Le plan des humains, et la terre commencent à être de plus en plus remarqués. Leur manque de magique et compensé par leur progrès technologique et leur puissance militaire, comme ils ont pu le démontrer lors d’un immense conflit planétaire il y a quelques années.</p>
`, 20));
this.fragments.push(new Fragment(userService.erudit,
      ["planairecodexmecaniqueportailplan", "planairecodexmécaniqueportailplan"],
      `📖 Codex de Mécanique planaire 📖`,
      `<p>Ce codex&nbsp;de mécanique&nbsp;planaire&nbsp;explique les rudiments de la création de portail&nbsp;entre les plan.</p>
<p>Les plans peuvent être décrits comme des mondes parallèles. Chaque plan a sa magie, ses peuples, ses pouvoirs.</p>
<p>[...]</p>
<p>Les plans sont souvent isolé les un des autres mais il est possible de les relier avec un lien. Un lien entre les plans se crée quand un portail est ouvert entre 2 plans.</p>
<p>Le lien a besoin d’un point d’accroche sur chaque plan et une fois un portail ouvert il est difficile d’en ouvrir ailleurs que sur le lien.</p>
<p>[...]</p>
<p>L’ouverture initial d’un portail est quelques chose de très complexe avec des règles précises. Une fois le 1er portail ouvert et le lien créé, il est plus facile de rouvrir le portail mais maintenir un portail ouvert plus de quelques secondes est coûteux.</p>
<p>[...]</p>
<p>Quand un lien est créé, le pouvoir des 2 plans fuite par le lien et répand un champ de magie dans les alentours du points d'ancrage du portail. L’étendu du champ dépend de beaucoup de paramềtre mais plus la magie locale est faible et plus le lien va fuiter vers ce plan.</p>
<p>[...]</p>
<p>Les liens peuvent être détruits, en faisant passer une onde de choc quand un portail est ouvert. Pour limiter les risques d’attentat, même les plus riches n’ouvre de portails que quand cela est nécessaire. Lorsqu’un lien est détruit, la zone de magie qui avait fuité disparaît presque instantanément laissant souvent les individus sans pouvoirs. Les objets magiques privé de liens comme les livres ou arme magique deviennent inerte. La destruction de lien est donc extrêmement dangereuse.</p>
<p>[...]</p>
<p>L’art de la création d’un lien et de portail s’appele la Thyrapoedae.</p>
<p>[...]</p>
<p>Les points d’accroche de lien et des portails doivent répondre à des critères bien précis et doivent présenter des éléments physique ou symbolique spécifique aux plans à relier. On appel ses éléments physique ou symbolique des marqueurs. De manière général il faut rassembler les marqueurs des 2 plans des 2 coté du lien. Cela rend parfois l’ouverture difficile et il est nécessaire de voyager d’abord depuis un autre plan pour relier 2 plans difficiles à relier.</p>
<p>Par exemple pour relier le plan psychéides avec le plan sirénien ils faut des points d’ancrage</p>
<p>Voici les marqueurs pour les principaux plans connu &nbsp;:</p>
<ul>
<li>Plan des Psychéïdes : </li>
<li>Plan des Sirinéen : source de chaleur intense, relative à l’environnement local : lave, feu, éclair, etc ... </li>
<li>Plan des Dahona : emblème de puissance, souvent une représentation de leur chef de guerre </li>
<li>Plan des Nemateliques : Une activité de chimie organique, comme de la vie ou une réaction chimique </li>
<li>Plan des Humains : de grande quantité d’eau </li>
</ul>
`, 21));
this.fragments.push(new Fragment(userService.voyant,
      ["ruisseau","lit","nid","oiseau"],
      `Paris - 4 juillet 1924 - Un homme gentil`,
      `<p><strong class="people">MONSTRE est de retour. Il ne vient pas souvent, mais quand il vient il s’occupe toujours de moi. Je dois avoir 4 ou 5 ans. C’est un de mes plus vieux souvenir. Je me rappel <strong class="people">MONSTRE qui me donne une <strong class="mc">sucette. Après il va voir maman et il ne faut pas les déranger.</p>
`, 0));
this.fragments.push(new Fragment(userService.voyant,
      ["plage","soleil","maria"],
      `Paris - 21 décembre 1930 - L’incendie`,
      `<p>Il y a un <strong class="mc">incendie dans l’immeuble en face. Ça fait beaucoup de fumées. Maman m’a dit de rester à l'intérieur, mais j’ai envie de mieux voire.</p>
<p>...</p>
<p>Je suis dans la rue. L’odeur de feu est épouvantable. Peut être que j’aurais mieux fait de rester à la maison finalement. En plus on ne voit pas mieux d’ici.</p>
<p>J’ai la tête qui tourne, probablement la fumée.</p>
<p>…</p>
<p>Je vois des images bizarres devant mes yeux. Des flashs, très nettes, mais qui partent aussitôt. J’ai du mal à comprendre ce qui m’arrive, maman m’avait bien dit de ne pas m’approcher des fumées. Je vois <strong class="people">MONSTRE en train de discuter avec <strong class="people">AGENT. Ils sont sur une <strong class="mc">plage. Le ciel est rouge et il y a deux soleils. C’est certainement une hallucination.</p>
`, 1));
this.fragments.push(new Fragment(userService.voyant,
      ["pouvoir"],
      `Paris, poste de police - 22 mai 1933 - Interrogatoire et visions`,
      `<p>Maman doit aller parler avec une dame au poste de police. Elle dit qu’elle n’a trouvé personne pour me garder alors je dois venir avec elle et être bien sage.</p>
<p>Quand on arrive au poste de police on va dans une petite pièce toute sombre. Il y a <strong class="people">TELE et un <strong class="mc">policier&nbsp;(<strong class="people">FLIC). <strong class="people">FLIC n’arrête pas de fumer et la fumée me pique les yeux. &nbsp;Maman me dit d’aller attendre sur la chaise dans le coin de la pièce et de ne pas faire de bruit.</p>
<p>Je m’ennuie sur cette chaise … J’ai la tête qui tourne. Je commence à voir des images, comme lors de l’incendi. Cette fois les images reste plus longtemps, et je peux parfois entendre ce que le gens fonts. Je vois <strong class="people">TELE. Elle est assise par terre, en tailleur. Il y a un genre d’étoile dessiné devant elle. Elle se parle à elle même, comme si elle calculait ou planifiait quelque chose :</p>
<p>“- D’abord je dois avancer de 3 mètres, puis tourner vers la gauche puis … “</p>
<p>Et ensuite elle se mets à chanter ou psalmodier quelque chose :</p>
<p>“- Gadoola boo ha ha bibbidi boo ...”</p>
<p>Et tout d’un coup plein de <strong class="mc">bagues et de colliers en or apparaissent devant elle, sur l’étoile.</p>
<p>Je crois que ce que je vois c’est vraiment passé. Je crois que <strong class="people">TELE a volé des bijoux en utilisant de la <strong class="mc">magie&nbsp;! Je vais le dire à maman.</p>
`, 2));
this.fragments.push(new Fragment(userService.voyant,
      ["internat","interna","internats"],
      `Paris, Internat - 15 juin 1933 - Une occasion de sortir`,
      `<p><strong class="people">TELE est venue me voir à l’école aujourd’hui. Elle m’a dit qu’elle connaissait mon secret. Elle sait que je peux voir des choses. Elle a essayé de me fait peur, elle a dit que si le gens l’apprenait, je serais expulsé de l'<strong class="mc">internat. Moi je m’en fiche d’être viré, mais si Steve l’apprend, il ne voudra jamais sortir avec moi.</p>
<p><strong class="people">TELE veux que je l’aide à faire quelque chose ce soir :</p>
<p>“- Il y a une <strong class="mc">clef, qui ressemble à ça dans une maison, j’ai besoin que tu trouve dans quelle pièce elle est”. Elle me montre une image de la <strong class="mc">clef.</p>
<p>Elle a dit qu’elle m’aidera à sortir du bahut. Je vais accepter, pour qu’elle me laisse tranquille. Et ça me fera une bonne occasion de sortir :)</p>
`, 3));
this.fragments.push(new Fragment(userService.voyant,
      ["mouchoir"],
      `Paris, pas très loin de l’internat - la nuit du 15 juin 1933 - La clef`,
      `<p><strong class="people">TELE m’a fait sortir, sans problème. Elle est super douée avec les serrures. Elle m’a conduit dans une ruelle, derrière une grande maison.</p>
<p>Je suis venu avec mon briquet et un vieux <strong class="mc">mouchoir, pour faire de la fumée. Je m’assoie par terre, et fait brûler mon mouchoire, en espérant que ça marche. Je commence à voir quelques images. Je ne sais pas trop comment je peux savoir où est cette <strong class="mc">clef. <strong class="people">TELE me dit de me concentrer sur l’image de la <strong class="mc">clef. J’essaye, mais la vision disparaît. <strong class="people">TELE me fait recommencer plusieurs fois, et au bout de la troisième, je vois la <strong class="mc">clef, dans un tiroir dans le bureau. Je suis contente, c’est la première fois que j’arrive à utiliser mes visions pour quelque chose d’utile. Et en fait <strong class="people">TELE est plutôt sympathique. Elle n’a pas l’aire pressée de retrouver la <strong class="mc">clef et on discute de nos pouvoirs sur le chemin du retour.</p>
`, 4));
this.fragments.push(new Fragment(userService.voyant,
      ["échange","echange","échenge","echenge"],
      `Paris, internat - 31 janvier 1935 - Mme Pollack`,
      `<p>Je suis convoquée par le principal. On est venu me chercher pendant la classe. C’était des Math, du coup je suis plutôt contente d’avoir une excuse pour partir. Je ne sais pas ce que le principal me veux. J’ai été plutôt sage ces dernier temps. Il m’attends, et il y a une dame (<strong class="people">ERUDIT) avec lui dans le bureau. Il me dit, en montrant <strong class="people">ERUDIT :</p>
<p>“- Ha, <strong class="mc">Rina, je t’ai convoqué parce que Mme <strong class="mc">Pollack a quelque chose d’important à te dire.”</p>
<p>Puis, en se tournant vers <strong class="people">ERUDIT :</p>
<p>“- je vous laisse mon bureau. Quand vous aurez terminé, demander à ma secrétaire de vous raccompagner. ” Et il sort du bureau.</p>
<p>Je suis seule avec cette étrange dame. Elle est calme, et posée. Sa présence est rassurante. Elle se tourne vers moi et me regarde dans les yeux :</p>
<p>“- J’ai dit à ton principal que je venais pour raison familial urgente, mais en fait je dois te parler de quelque chose de très important. Je sais que tu peux avoir des visions, et que ce que tu vois et toujours vrai...”</p>
<p>“- Comment savez vous ça !”</p>
<p>“- Ça n’a pas d’importance, je peux juste te dire que je sais certaines choses qui pourraient t’intéresser à propos de tes visions”</p>
<p>“- C’est vrai ? Vous savez comment j’ai eu ce <strong class="mc">pouvoir ? d’où il vient ?”</p>
<p>“- Je peux répondre à beaucoup de tes questions, mais je ne pense pas que le bureau du principal soit le bon endroit. Et je suis venu parce que mon mari et moi avons besoin de ton aide.”</p>
<p>“- Ok, pourquoi vous avez besoin de moi ? C’est pour *voir* quelque chose ?”</p>
<p>“- Oui, c’est pour *voir* quelque chose. Si ça te convient, je vais trouver une excuse pour que tu puisse partir avec moi aujourd’hui. Tu pourras nous rendre ce petit service et en échange, je te dirais tout ce que je sais sur tes capacitées.”</p>
<p>“- Ça marche, de toute façon je n’avais pas envie de retourner en cours de math...”</p>
`, 5));
this.fragments.push(new Fragment(userService.voyant,
      ["attentat","attenta","atenta","atentat","attantat","attanta","atanta"],
      `Paris, Le salon de thé - 3 octobre 1936 - Une nouvelle mission`,
      `<p>J’ai rendez-vous avec <strong class="people">ERUDIT dans ce salon de thé. J'espère qu’elle va arriver, parce que j’ai pris une table, et que je n’ai pas les moyens de payer. Ha ! elle arrive :</p>
<p>“- Désolé, <strong class="mc">Rina je suis un peu en retard.”</p>
<p>“- Ce n’est rien madame, pourquoi vouliez vous me voire ?”</p>
<p>“- J’ai une nouvelle <strong class="mc">mission à te proposer. Avant de t’en dire plus, il faut que je te prévienne que c’est une <strong class="mc">mission extrêmement dangereuse. Mais aussi très importante, sinon je ne ferais pas appel à toi. Tu peux donc refuser.”</p>
<p>“- Ça m’est égale que ce soit dangereux. Je suis partante !”</p>
<p>“- Attend un peu d’avoir quelques détails… On va essayer de déjouer un <strong class="mc">attentat, mais on risque bien d’y passer nous même. Et on a pas encore réussi à recruter tous les talents dont on a besoin. Est-tu sûr que tu veux venir ?”</p>
<p>“- Si je ne viens pas vous tenterez quand même d'arrêter l’<strong class="mc">attentat, n’est-ce pas ?”</p>
<p>“- Oui, les enjeux sont trop importants.”</p>
<p>“- Alors je viens. Vous aurez besoins de mes visions.”</p>
<p>“- Très bien, je pensais bien <strong class="mc">pouvoir compter sur toi. L’<strong class="mc">attentat doit avoir lieu le 28 octobre, lors d’un <strong class="mc">mariage. As-tu une tenu de soirée qui pourrait convenir à un <strong class="mc">mariage ?”</p>
<p>“- Oui, je dois avoir ce qu’il faut. Et je connais une personne qui a un talent pour ce genre d’opération. Est-ce que je peux la contacter ?”</p>
<p>“- On recherche quelqu’un qui a des compétences très particulières, mais qui sait, peut être que cette personne pourra convenir.” <strong class="people">ERUDIT ajoute en tendant sa carte :</p>
<p>“- Dites lui de me contacter directement, et assez rapidement, mais ne lui dite rien d’autre.“</p>
<p>“- D’accord”</p>
`, 6));
this.fragments.push(new Fragment(userService.voyant,
      ["mariage","marriage","mariages"],
      `Paris - 6 octobre 1936 - On recrute`,
      `<p>J’ai retrouvé <strong class="people">TELE à l'endroit habituel. Je lui ai dit que j’ai été contacter pour faire une <strong class="mc">mission. Ça se passera au château de <strong class="mc">Martinvast, pendant un <strong class="mc">mariage. Ça à l’air dangereux, mais je pense qu’ils la payeront bien. Les yeux de <strong class="people">TELE se mettent à briller. Elle aime l’argent, ça se voit.</p>
<p>Elle accepte, et je lui donne la carte de <strong class="people">ERUDIT, en lui disant de la contacter rapidement pour plus de détails.</p>
`, 7));
this.fragments.push(new Fragment(userService.voyant,
      ["suzanne", "suzane"],
      `Paris - 12 octobre 1936 - Une lettre`,
      `<p>Je viens de recevoir une <strong class="mc">lettre. Je l’ouvre, c’est signé <strong class="mc">Roberta. Ce sont des précisions pour l’opération du 28. Elle me dit que je vais avoir un alias : <strong class="mc">Suzanne. Je me répète plusieurs fois le nom pour être sûr de ne pas l’oublier. Et je brûle la <strong class="mc">lettre.</p>
`, 8));

this.fragments.push(new Fragment(userService.voyant,
      ["attendrai","atendrai","attandrai","attendrai", "j'attendrai"],
      `Paris - 18 octobre 1936 - Enregistrement`,
      `<p>Je me souviens de cette musique: </p>
      <audio controls>
       <source src="/assets/rina.ogg" type="audio/ogg">
       <source src="/assets/rina.mp3" type="audio/mpeg">
       Your browser does not support the audio element.
     </audio>

      `, 9));
this.fragments.push(new Fragment(userService.voyant,
      ["mortebiere"],
      `Caen, Bar - Ce midi - Le briefing`,
      `<p>Je suis dans une petite pièce sombre. J’entends des rires et des chants de l’autre côté de la porte, venant d’un <strong class="mc">bar. On doit être six ou sept dans cette pièce, et dans la pénombre je n’arrive pas à voir tous les visages. Je reconnais <strong class="people">ERUDIT et son mari. C’est lui qui organise ce briefing.</p>
<p><strong class="people">CHEF nous explique ce qu’on fait ce soir, c’est long, et je n’écoute pas tout en détails :</p>
<p>“- Nous irons ce soir au châteaux nous infiltrer au <strong class="mc">mariage de Hector de La Grande Marche et Marie Elisabeth d’Autriche. Ce <strong class="mc">mariage c’est qu’un prétexte pour inviter une grande quantité de notables et dirigeants dans le but de les assassiner.</p>
<p>Nous avons une bombe et notre seule chance d'empêcher le massacre est de la faire exploser exactement au bon moment et au bon endroit pour éliminer les terroristes à leur arrivée.”</p>
<p>“- Pourquoi ce n’est pas la police qui s’occupe de ça ?” demande une femme un peu devant moi. Mais c’est une voix que je connais ? Maman ! Qu’est ce qu’elle fait ici. Si elle me voit, elle va me passer un savon, et adieu la <strong class="mc">mission ! Je comprend maintenant pourquoi il faut m’appeler <strong class="mc">Suzanne. Je me recule d’un pas pour être sur que maman ne puisse pas me reconnaître.</p>
<p><strong class="people">CHEF continue son briefing, sans s'apercevoir de rien.</p>
<p>“- Nous savons de source sûre l’heure exacte où la bombe doit exploser. Et celle-ci est d’ailleurs déjà configurée”</p>
<p>“- Et pour l’emplacement ? C’est habituellement plus simple à savoir !” Demande <strong class="people">TELE.</p>
<p>“- <strong class="mc">Roberta, avec l’aide de <strong class="mc">Suzanne se chargera de localiser l’emplacement, et comme vous vous en doutez, vous serez chargé de placer la bombe.”</p>
<p>“- Ma carte servira à ce moment ? demande maman</p>
<p>“- Oui, vous fournirez le <strong class="mc">plan du château pour aider à la localisation de l’emplacement. Et de ce que vous cherchez dans le château par la même occasion.” Mais qu’est ce que maman peut bien chercher dans ce château ? Est-ce que c’est en rapport avec ce tableau, la <strong class="mc">vague de je ne sais plus qui ?</p>
<p>“- oui …” répond t-elle, “j’ai le <strong class="mc">plan, enfin partiellement dessiné. Je ne vois toujours pas vraiment en quoi vos instructions vont nous aider vu que je sais comment mon camouflage fonctionne. Si je suis interrogé et menacé je ne vous promet pas de ne rien révéler.”</p>
<p>“- Ne vous inquiétez pas, c’est là que notre dernier équipier intervient” <strong class="people">CHEF répond, et continue en se tournant vers l’homme à côté de moi :</p>
<p>“- Monsieur, comment dois-je vous appeler ?”</p>
<p>“- Heu … Jules … oui, c’est ça, Docteur Jules”.</p>
<p>“- Bien docteur, vous avez la potion promise ?”</p>
<p>“- Oui, bien sûr la voilà” répond <strong class="people">MONSTRE en montrant un petit flacon.</p>
<p>C’est étrange, j’ai l’impression de connaître cette personne. Je sens comme une étrange attirance vers lui.</p>
<p>Le briefing continue, et maman distribue des invitations pour le <strong class="mc">mariage, et <strong class="people">TELE dis quelque chose, mais je ne suis pas concentrée. Toute mon attention est retenu par cet homme.</p>
`, 10, ["pouvoir"]));
this.fragments.push(new Fragment(userService.voyant,
      ["mémoire","memoire"],
      `Sur la route de Martinvast - Il y a quelques minutes`,
      `<p>Le château se profile au bout de l’allée. J’entend quelques petites tintement, <strong class="people">MONSTRE sort les fioles et commence à les distribuer aux autres puis prend la parole :</p>
<p>“- Buvez ça maintenant, ça va mettre quelque secondes à agir”</p>
<p>Tout le monde ouvre son falcon, je fais de même et boit son contenu d’une traite.</p>
<p>J’ai toujours cette étrange attirance pour <strong class="people">MONSTRE, c’est la première fois que je ressens ça. Il faut absolument que je découvre qui est ce type.</p>
<p>Je dis :</p>
<p>“- Hum, c’est bon ton médicament, docteur !”</p>
<p>Tout d’un coup maman s'exclame :</p>
<p>“- <strong class="mc">Rina … <strong class="mc">Rina c’est toi ? Arrêtez la voiture !”</p>
<p>Elle m’a reconnu ! C’est la faute de ce ‘docteur’ qui me fait perdre mes moyens. Elle est rouge de colère. Quelle catastrophe ... J’ai la tête qui commence à tourner.</p>
`, 11));
this.fragments.push(new Fragment(userService.tele,
      ["pouvoir"],
      `Paris - 26 août 1928 - La bijouterie`,
      `<p>Je me balade place Vendôme. C’est une belle soirée d'août, la lumière du <strong class="mc">soleil couchant est magnifique. Je cherche l’inspiration pour mes prochains tableaux. Je m’attarde devant les vitrines, pleines de merveilles et de bijoux.</p>
<p>Un magnifique pendentif &nbsp;en or, incrusté de <strong class="mc">diamant attire mon regard. J’aimerais tellement en avoir un comme ça. Evidemment ce n’est pas dans mes moyens. Je rentre quand même dans le magasin, juste pour voir. Je retrouve le pendentif dans une vitrine à l'intérieur. Je demande à une vendeuse si je peux l’essayer. Elle me regarde de la tête au pied, et répond d’un air un peu dédaigneux : “Je ne crois pas que ça va être possible.” Elle doit probablement savoir que je ne peux pas me l’acheter. Je m’en fiche, je suis comme captivée par l’objet. Il brille, il est magnifique, dans cet instant, c’est tout ce que je veux. Je ne sais pas combien de temps je reste là captivé par cette merveille. J’ai l’impression que mes lèvres bougent, est ce que je suis en train de parler ?</p>
<p>Tout d’un coup j’ai l’impression de me réveiller, le pendentif dans la main. Comment est-il arrivé là. C’est comme s’il s’est téléporté ! La vendeuse me voit avec le pendentif et s'exclame : “Et là, je vous avais dit de ne pas y toucher ! Comment l’avez vous pris, toutes ces vitrines sont fermées à <strong class="mc">clef ?”. Je laisse tomber le pendentif, et m’enfuie en courant.</p>
`, 0));
this.fragments.push(new Fragment(userService.tele,
      ["gadoulisme"],
      `Paris - 27 août 1928 - Télékinésie`,
      `<p>Je suis encore troublée par l’incident d’hier, avec le pendentif. Comment est il arrivé dans ma main. C’est clairement surnaturel, j’en suis sûre. Et j’ai senti comme un <strong class="mc">pouvoir qui s’activait en moi. Il faut que je tire ça au claire. Je une amie que crois dans le spiritisme, peut être qu’elle pourra m’aider. Je vais la voir cette après midi.</p>
<p>...</p>
<p>Je lui ai raconté mon aventure d’hier. Elle était surexcitée, en entendant ça. Elle a tout de suite sortie un vieux livre en disant qu’il parlait de <strong class="mc">télékinésie, et que ça ressemble à ce que j’ai fait hier. J’ai pris le livre et je vais <strong class="mc">pouvoir l’étudier au calme.</p>
<p>…</p>
<p>D’après le livre, pour transporter un objet, il faut matérialiser un point d’ancrage, puis prononcer une incantation pour soit amener un objet vers soit soit envoyer un objet ailleurs. J’ai vraiment pas bien compris comment marche l’incantation. Il semblerait que l’incantation doit décrire le chemin qu’il faut faire pour aller vers l’objet recherché. C’est vraiment compliqué, et ça ne ressemble pas trop à ce que j’ai fait. Je vais faire quand même des essais on ne sait jamais.</p>
<p>Je m’assoie par terre et je dessine devant moi un pentacle. Ça sera mon point d’ancrage. Je pose un petit <strong class="mc">pinceau sur le pentacle, et j’essaie de l’envoyer un peu plus loin, en face de moi. Je ferme les yeu, me concentre et tente l’incantation suivante :</p>
<p>“- Sala boo la la gadoola”. Je rouvre les yeux, et ça a marché ! Le <strong class="mc">pinceau c’est déplacé d’environ deux mètres. C’est incroyable ! Bon je n’ai pas compris comment ça marche, l’incantation était directement écrite comme ça dans le livre. Voyons si j’arrive à faire revenir le <strong class="mc">pinceau. Le livre indique l’incantation inverse :</p>
<p>“- Gadoola boo la la Sala”. Ça fonctionne ! Le <strong class="mc">pinceau est revenu à sa position initiale. Par contre ces simples incantations m’ont épuisé.</p>
<p>Je décide de relire le livre pour essayer de comprendre tout ce que je peux faire. Apparemment chaque mot de l’incantation a une signification. Et l’incantation doit décrire le chemin que prend l’objet. Il y a une histoire de vitesse, et pour les virages il faut utiliser les mot “bobbidi” et “bibbidi”. Et je dois <strong class="mc">pouvoir faire passer les objets à travers les vitres et le bois (mais pas les murs).</p>
<p><strong class="mc">POUVOIR <strong class="people">TELE DEBLOQUE</p>
`, 1));
this.fragments.push(new Fragment(userService.tele,
      ["policier"],
      `Paris, poste de police - 22 mai 1933 - Arrestation`,
      `<p>Je me suis fait attrapée. Pas de chance, j’avais le <strong class="mc">plan parfait. Mon contact m’avait dit exactement où était les bijoux. Je commence à vraiment bien maîtriser la <strong class="mc">télékinésie. J’ai réussi du premier coup. Et paf, <strong class="people">FLIC m’attrape la main dans le sac. Comment a t-il su ce que j’étais en train de faire ?</p>
<p>Je suis dans une salle d'interrogatoire, <strong class="people">FLIC essaye de me faire parler. Mais je sais bien que tant que je ne dis rien, je ne risque rien. Ils ne peuvent pas m’envoyer en prison s’ils ne savent pas comment j’ai pu entrer en possession des bijoux.</p>
<p><strong class="people">FLIC fait entrer <strong class="mc"><strong class="people">JOURNALISTE dans ma salle d'interrogatoire. Et elle est venue avec <strong class="people">VOYANTE, une gamine. Ça doit être sa fille. Je vais lui raconter les mêmes truc qu’au <strong class="mc">policier. “J’ai trouvé ces bijoux dans une poubelle, je n’ai rien fait …”</p>
`, 2, ["pouvoir"]));
this.fragments.push(new Fragment(userService.tele,
      ["magique","magie"],
      `Paris, poste de police - 22 mai 1933 - Interrogatoire`,
      `<p>Elle semble pas très bien. Personne ne fait attention a <strong class="people">VOYANTE, mais moi je l’ai repérée. On dirait qu’elle est en trance. Peut être qu’elle a un <strong class="mc">pouvoir elle aussi.</p>
<p>…</p>
<p>Bon ils en ont fini avec moi, je vois qu’ils ne sont pas convaincu de mes arguments, mais ils ne peuvent pas faire grand chose. Je souris. Ils sont en train de sortir. La gamine se lève, mais avant de sortir elle dit à <strong class="mc"><strong class="people">JOURNALISTE :</p>
<p>“- Je sais comment elle a fait, elle a utilisé son <strong class="mc">pouvoir <strong class="mc">magique&nbsp;! ”</p>
<p><strong class="people">FLIC a eu l’air étonné, mais <strong class="mc"><strong class="people">JOURNALISTE s'esclaffe que la <strong class="mc">magie ça n’existe pas et qu’elle ferait mieux d’être plus attentive à l’école.</p>
`, 3));
this.fragments.push(new Fragment(userService.tele,
      ["peinture","pinceau"],
      `Paris - 15 juin 1933 - Internat`,
      `<p>Mes dernières aventures nocturnes n’étaient pas d’un grand succès. J’ai bien réussi à voler quelques pièces. Rien qui me rende riche, encore moins célèbre. J’ai même plus de succès avec mes peintures.</p>
<p>Mais ce soir c’est différent. J’ai eu un super tuyau. Il suffit de trouver une <strong class="mc">clef. J’ai même une image de la <strong class="mc">clef. Malheureusement, elle est dans une maison immense, et extrêmement bien gardée. J’ai besoin d’un peu d’aide pour la trouver.</p>
<p>...</p>
<p>Je vais à l’<strong class="mc">internat, c’est là que <strong class="people">VOYANTE se trouve. Je rentre sans difficulté dans l’<strong class="mc">enceinte de l’école, et je trouve <strong class="people">VOYANTE assez facilement. Il faut que je trouve comment la faire travailler pour moi. Je lui dis que je sais qu’elle a un <strong class="mc">pouvoir, et laisse sous entendre que ça pourrait lui causer des problème. Je lui dis que j’ai besoin d’aide pour faire quelque chose ce soir. Au final, elle accepte assez vite de m’accompagner.</p>
`, 4));
this.fragments.push(new Fragment(userService.tele,
      ["clé","clef","cle"],
      `Internat - 15 juin 1933 - Le vol de la clef`,
      `<p>On arrive près de la maison. Je lui montre le dessin de la <strong class="mc">clef&nbsp;que je cherche. Elle accepte d’utiliser ses talents. Apparemment <strong class="people">VOYANTE ne sais pas très bien se servir de son <strong class="mc">pouvoir. Elle utilise de la fumée venant d’un <strong class="mc">mouchoir&nbsp;qui brûle. Ce n’est certainement pas le meilleur moyen. Au bout de trois essais, elle arrive a me décrire où se trouve la <strong class="mc">clef. Je vais la ramener à l’école, j'irais chercher la <strong class="mc">clef après ça.</p>
<p>Il faut que je reste en bon termes avec elle, son talent peut être très pratique.</p>
`, 5));
this.fragments.push(new Fragment(userService.tele,
      ["martinvast"],
      `Paris - 06 octobre 1936 - Une mission intéressante`,
      `<p>Je rencontre <strong class="people">VOYANTE à l’endroit habituel. Je me suis prise d’affection pour cette petite. Elle a quelque chose d’important à me dire, je la vois trépigner d'impatience.</p>
<p>Elle me dit qu’elle a une <strong class="mc">mission, au château <strong class="mc">Martinvast. C’est intéressant, cet endroit doit regorger de richesses. Il faut absolument que je profite de l’occasion pour récupérer quelque chose de précieux. Ha ! et en plus je vais être grassement payé. Elle me tend une carte de visite en me disant d’envoyer une <strong class="mc">lettre&nbsp;à cette personne, pour les détails.</p>
`, 6));
this.fragments.push(new Fragment(userService.tele,
      ["télékinésie","télékinésiste","telekinesi"],
      `Paris - 12 octobre 1936 - Formule`,
      `<p>J’ai reçu une <strong class="mc">lettre de la part de <strong class="people">ERUDIT. Elle me demande d’apprendre par coeur une formule de <strong class="mc">télékinésie pour récupérer des livres depuis un lieu prédéterminé. Il faudra se tourner vers l’ouest puis lancer la formule pour suivre ce trajet :</p>
<p>Hum, la formule doit être :</p>
<p>Je vais tester la formule ce soir dans la rue.</p>
<p class="italique">Bien joué, tu te souviens de ton pouvoir de télékinésie. <a href="#/tele">Tu peux t'entrainer ici.</a></p>
`, 7));
this.fragments.push(new Fragment(userService.tele,
      ["mortebiere"],
      `Caen, Bar - Ce midi - Le briefing`,
      `<p>Je suis dans une petite pièce sombre. J’entends des rires et des chants de l’autre côté de la porte, venant d’un <strong class="mc">bar. On doit être six ou sept dans cette pièce, et dans la pénombre je n’arrive pas à voir tous les visages. Je reconnais <strong class="people">ERUDIT et la personne à coté doit être son mari. Il commence la réunion en disant :</p>
<p>“- Bonjour à tous. Merci d’être là à l’heure. Pour des raisons de sécurité, vous n’avez pas été tenu au courant de la nature exacte de cette opération. Normalement on vous a prévenu que la <strong class="mc">mission était dangereuse.”</p>
<p>“- Oui, ils ont tous accepté en connaissance de cause.” &nbsp;confirme <strong class="people">ERUDIT</p>
<p>“- Le but de notre opération est d'empêcher un <strong class="mc">attentat, et de neutraliser tous les terroristes. Nous irons ce soir au châteaux nous infiltrer au <strong class="mc">mariage de Hector de La Grande Marche et Marie Elisabeth d’Autriche. Ce <strong class="mc">mariage c’est qu’un prétexte pour inviter une grande quantité de notable et dirigeant dans le but de les assassiner.</p>
<p>Nous savons que l’<strong class="mc">attentat surviendra quand tout le monde sera rassemblé dans la grande salle, à partir de minuit. Nous avons une bombe et notre seule chance d'empêcher le massacre est de la faire exploser exactement au bon moment et au bon endroit pour éliminer les terroristes à leur arrivée.”</p>
<p>“- Pourquoi ce n’est pas la police qui s’occupe de ça ?” &nbsp;demande une dame (<strong class="mc"><strong class="people">JOURNALISTE)</p>
<p>“- C’est une <strong class="mc">mission délicate, et les instances dirigeantes préfères ne pas être impliquées. C’est pour ça que nous sommes chargés de résoudre le problème discrètement.” répond <strong class="people">CHEF.</p>
<p>J’essaye de faire avancer la réunion, et je demande :</p>
<p>“- Et je suppose que vous savez comment faire ?”</p>
<p>“- Oui, nous savons de source sûre l’heure exacte où la bombe doit exploser. Et celle-ci est d’ailleurs déjà configurée” je répond en montrant la valise sur la table près de <strong class="people">SOLDAT</p>
<p>“- Et pour l’emplacement ? C’est habituellement plus simple à savoir !”</p>
<p>“- <strong class="mc">Roberta, avec l’aide de <strong class="mc">Suzanne se chargera de localiser l’emplacement, et comme vous vous en doutez, vous serez chargé de placer la bombe.” Evidemment je vais devoir placer la bombe.&nbsp;</p>
<p>“- Ma carte servira à ce moment ? demande <strong class="mc"><strong class="people">JOURNALISTE</p>
<p>“- Oui, vous fournirez le <strong class="mc">plan du château pour aider à la localisation du por… de l’emplacement. Et de ce que vous cherchez dans le château par la même occasion.”</p>
<p>Tiens apparemment <strong class="people">CHEF allait dire quelque chose d’autre. Il nous cache des choses, mais ce n’est pas bien étonnant. Et <strong class="mc"><strong class="people">JOURNALISTE cherche quelque chose, elle n’est pas toute blanche non plus. Peut être que ça a de la valeure !&nbsp;</p>
<p><strong class="people">CHEF se tourne vers la dernière personne tapie dans l’ombre.</p>
<p>“- Monsieur, comment dois-je vous appeler ?”</p>
<p>“- Heu … Jules … oui, c’est ça, Docteur Jules”</p>
<p>“- Bien docteur, vous avez la potion promise ?”</p>
<p>“- Oui, bien sûr la voilà” répond <strong class="people">MONSTRE en montrant un petit flacon.</p>
<p>“- Juste avant d’arriver au château, nous allons boire de cette potion. Ses effets sont très efficaces et nous permettront de <strong class="mc">pouvoir mentir et résister aux interrogatoire bien plus efficacement.“</p>
<p>Ça me parait louche cette histoire de potion ...</p>
<p><strong class="people">CHEF&nbsp;se tourne à nouveau vers <strong class="mc"><strong class="people">JOURNALISTE et lui demande :</p>
<p>“- Ah ! Avez-vous les invitations ?”</p>
<p>Elle hoche la tête et <strong class="people">CHEF prend les cartons qu’elle lui tend.</p>
<p>“- Gardez en une pour vous”</p>
<p>Il distribue les invitation, apparemment je n’en ai pas, je dois être sur la même invitation que <strong class="people">VOYANTE.</p>
<p><strong class="people">CHEF semble avoir fini, il demande si on a des questions. Il a oublié un élément assez important :</p>
<p>“- Avez-vous mon paiement ?” je demande</p>
<p>“- Oui, voici la 1er partie” je dis en sortant une petite bourse de ma poche. “Comme convenue, je vous donne la suite en sortant du chateaux”</p>
`, 8, ["pouvoir"]));
this.fragments.push(new Fragment(userService.tele,
      ["mémoire","memoire"],
      `Sur la route de Martinvast - Il y a quelques minutes`,
      `<p>Le château se profile au bout de l’allée. J’entend quelques petites tintement, <strong class="people">MONSTRE sort les fioles et commence à les distribuer aux autres puis prend la parole :</p>
<p>“- Buvez ça maintenant, ça va mettre quelque secondes à agir”</p>
<p>Tout le monde ouvre son falcon, je vois que <strong class="people">CHEF boit son flacon, ça me rassure et je fais de même. Je reste suspicieuse malgré tout. <strong class="people">MONSTRE n’a pas bu le contenu de sa <strong class="mc">fiole ! C’est un piège, il nous a tous empoisonné ! Je m’exclame :</p>
<p>“- C’est un piège !”</p>
`, 9));
this.fragments.push(new Fragment(userService.journalist,
      ["journaliste","presse","louise","..."],
      `Paris - 24 novembre 1918 - Une soirée torride`,
      `<p>J’arrive au <strong class="mc">bar, vers 20h, <strong class="people">MONSTRE est déjà là, il m’attend. Il m’a promis un scoop, et que je pourrais publier un article retentissant. On s’installe à une table, et je lui demande tout de suite de raconter son histoire. Ce qu’il s’empresse de faire, avec beaucoup de détails. C’est une histoire à dormir debout, et je lui dis :</p>
<p>“- Il faudrait des sorcières ou des magiciens pour que ce soit possible”</p>
<p>“- et pourquoi pas” me répond-il avec un sourire.</p>
<p>J'éclate de rire. Je comprend que tout ça c’était une excuse pour me voire.</p>
<p>La soirée est vraiment charmante, c’est rare rencontrer un homme qui autant de conversation. Il me dit qu’il est conservateur dans un musée. Pourtant il a l’air à peine plus vieux que moi. Il me dit qu’il est spécialiste de l’art japonais. Il me raconte toute l’histoire d’un tableau magnifique, qui représente une immense <strong class="mc">vague.</p>
`, 0));
this.fragments.push(new Fragment(userService.journalist,
      ["enceinte","encinte","anceinte","ancinte"],
      `Paris - 28 janvier 1919 - Une nouvelle inattendu`,
      `<p>Je crois que je suis <strong class="mc">enceinte. Il faut que je lui dise, je ne sais pas comment il va réagir. Et on est pas marié. Quelque part, heureusement que mes parents ne sont plus là, ils n'auraient pas supporté la nouvelle. Ha voila <strong class="people">MONSTRE qui arrive. Je vais lui dire que c’est lui le père.</p>
<p>…</p>
<p>“- Je suis <strong class="mc">enceinte, tu vas être papa !”</p>
<p>“- Comment ! Et c’est moi le père ?? C’est pas possible. J’étais sûr que ce n’était pas possible ! Tu es sur que c’est moi le père ?”</p>
<p>“- Évidemment que c’est toi le père ! ”, il commence à m’énerver, qu’est ce qu’il insinue là !</p>
<p>“- Tu sais que rester élever un enfant n’a jamais été dans mes plans, et n’attends pas de moi une demande en <strong class="mc">mariage !”</p>
<p>“- Je sais ! Et t’inquiète pas, je suis bien assez forte pour m’occuper toute seule d’un gamin. Tu n’auras rien à faire, tu peux même partir tout de suite !”</p>
`, 1));
this.fragments.push(new Fragment(userService.journalist,
      ["rina"],
      `Paris - 21 août 1919 - Accouchement`,
      `<p>Haaa, Je suis épuisée ! Ça a duré plus de 24 heures ! Quelle douleur, et quelle joie. Aujourd’hui j’ai mis au monde ma fille. Je vais l’appeler <strong class="mc">Rina. Peut-être que <strong class="people">MONSTRE voudra la voire</p>
`, 2));
this.fragments.push(new Fragment(userService.journalist,
      ["incendie","insandi"],
      `Paris - 21 décembre 1930 - Incendie`,
      `<p>Il y a un <strong class="mc">incendie&nbsp;dans l'immeuble d’en face. J’ai dit à <strong class="people">VOYANTE de rester à l’intérieur, mais évidemment elle ne m’a pas écoutée. Elle est descendue voir.</p>
`, 3));
this.fragments.push(new Fragment(userService.journalist,
      ["clé","clef","cle"],
      `Paris - 22 mai 1933 - Un étrange vol`,
      `<p>Un contact <strong class="mc">policier (<strong class="people">FLIC) me raconte qu’une femme vient d'être arrêtée pour un vol, de bijoux chez un riche notable de la ville. Les bijoux on été retrouvé en sa possession, mais il ne comprend pas comment elle a pu les récupérer sans laisser de trace. Les bijoux étaient dans une pièce fermée à <strong class="mc">clef de l’intérieur, et le notable et sa femme dormait dedans, et ils n’ont rien entendu. Aucune trace. Il marmonne que ça doit être une sorcière. Quelle idiot, de croire encore aux sorcière ... J’aimerai comprendre comment elle a fait.</p>
<p>“- Est- ce que je pourrait la voir et lui poser quelques questions ?”</p>
<p>“- Oui”</p>
`, 4));
this.fragments.push(new Fragment(userService.journalist,
      ["pouvoir","policier"],
      `Paris, poste de police - 22 mai 1933 - Interrogatoire`,
      `<p>Je rentre dans la salle d'interrogatoire, il y a <strong class="people">TELE menottée et <strong class="people">FLIC est en face d’elle, il est en train de fumer et on voit à peine le mur du fond.</p>
<p>Je dis à <strong class="people">VOYANTE d’aller attendre sur la chaise dans le coin de la pièce et de ne pas faire de bruit. J’essaye de lui tirer les vers du nez mais elle m’assure que ce n’est pas elle et qu’on l’a piégée. Au moment de sortire de la salle <strong class="people">VOYANTE provoque un fou-rire, en s'exclamant “Maman, je sais comment elle a fait, elle a utilisé de la <strong class="mc">magie”</p>
`, 5));
this.fragments.push(new Fragment(userService.journalist,
      ["kanagawa"],
      `Paris - 25 novembre 1935 - La grande vague`,
      `<p>Je suis à table avec un journal. La une est le vol de la grande <strong class="mc">vague de <strong class="mc">Kanagawa. Le tableau à mystérieusement disparue du louvre, pendant la nuit. Les alarmes se sont déclenchées, mais quand la police est arrivée, elle a trouvé le gardien inconscient, et le tableau manquait.</p>
<p>Je me souviendrais toujours de nos premiers moments, avec <strong class="people">MONSTRE. Il aimait l’art, et c’était un de ses tableaux préférés. Dommage que son métier d’<strong class="mc">espion l’éloignait si souvent.</p>
<p>Ce tableau me rappellera toujours ces moments passés avec <strong class="people">MONSTRE</p>
<div><img src="/assets/vague.png" /></div>
`, 6));
this.fragments.push(new Fragment(userService.journalist,
      ["martinvast"],
      `Archives de Caen - 26 avril 1936 - Le plan du château`,
      `<p>Je suis à l'hôtel de ville, dans les archives du cadastre. J’ouvre et recherche quelque chose dans des livres, et des classeurs. Après plusieures heures infructueuses, je trouve enfin ce que je cherche : le <strong class="mc">plan&nbsp;du château. J’en dessine une copie.</p>
`, 7));
this.fragments.push(new Fragment(userService.journalist,
      ["vague"],
      `Paris, dans un café - 4 octobre 1936 - Une mission intéressante`,
      `<p>J’arrive dans un café. Je commande un thé à la menthe et je m’installe en attendant mon contact. Je sors le <strong class="mc">plan de ma sacoche. C’est étonnant que quelqu’un d’autre que moi s’intéresse aussi au château de <strong class="mc">Martinvast. Je sens qu’il prépare un casse, c’est peut être une occasion unique pour moi de retrouver La <strong class="mc">Vague.</p>
<p>Mon contact (<strong class="people">ERUDIT) arrive, c’est une femme qui a la trentaine, elle est poussiéreuse, j’ai l’impression qu’elle revient d’un voyage. Elle me regarde et me demande</p>
<p>“- <strong class="mc">Louise ?”</p>
<p>“- Oui c’est moi”</p>
<p>Elle s’installe à ma table, regarde le <strong class="mc">plan qui est sur la table, et dit</p>
<p>“- Ha c’est le <strong class="mc">plan du château, bien joué !”</p>
<p>“- Merci, ça n’a pas été facile à trouver. Vous avez mon argent ?”</p>
<p><strong class="people">ERUDIT laisse tomber trois <strong class="mc">diamant de sa main, et dit :</p>
<p>“- J’ai un autre service à vous demander, j’ai besoin d’invitations pour le <strong class="mc">mariage qui a lieux le 28 au château”</p>
<p>“- Ha oui le <strong class="mc">mariage de Hector de La Grande Marche, je pense que je peux vous avoir ça. Par contre je ne veux pas être payé en <strong class="mc">diamant, j’ai plutôt une autre idée”</p>
<p>J’ouvre la première page de mon cahier et je le tends à <strong class="people">ERUDIT en lui demandant :</p>
<p>“- Ça vous parle ?”</p>
<p>“- Oui, c’est la grande <strong class="mc">vague de <strong class="mc">Kanagawa, il me semble que ce tableau a été volé l’année dernière”</p>
`, 8));
this.fragments.push(new Fragment(userService.journalist,
      ["poème","poeme"],
      `Paris, dans un café - 4 octobre 1936 - Poème`,
      `<p>“- J'enquête dessus, et je pense que le tableau se trouve dans ce château. J’aimerai vous accompagner, le retrouver te le restituer aux autorités.”</p>
<p>“- Et si le tableau ne s’y trouve pas”</p>
<p>“- Alors je vous aurais fournis les entrées gratuitement”</p>
<p>“- Ok, mais sachez que ça sera très dangereux. Vous serez responsable d'amener les plans du château avec vous, Et de vous assurer que si vous êtes fouillée ou interrogé on ne puisse pas savoir ce que vous transportez”</p>
<p>On passe le reste de la matinée à mettre au point la meilleur méthode pour cacher le <strong class="mc">plan.</p>
<p>On a décidé de cacher les informations sur des dessins dans un <strong class="mc">poème. Je trouve que c’est un peu excessif comme système, ça serait plus simple de l’apprendre par coeur. Elle semblait y tenir.</p>
<p>L’idée est de découper le <strong class="mc">plan en 4 images, il suffit de les superposer pour avoir le <strong class="mc">plan complet. Je mettrais une croix dans la salle ou on nous fera probablement patienter. Je ne peux pas marqué le nom des salles sur le <strong class="mc">plan, apparement ça se serait trop dangereux, donc j’ai numéroté les salles. <strong class="people">ERUDIT avait peur que je n’arrive pas à mémoriser les noms des salles donc on bidouillé un <strong class="mc">poème pour s’en servir de moyen mnémotechnique tiré par les cheveux. Le <strong class="mc">poème a 4 strophes et 21 vers, un vers pour chaque salle. Chaque strophe donnent un mot et il faut que j’associe dans ma <strong class="mc">mémoire ce mot à la liste des lieux correspondant aux numéros de vers.</p>
`, 9));
this.fragments.push(new Fragment(userService.journalist,
      ["lezard","lézard"],
      `Lézard`,
      `<p>Bureau Mer</p>
<p>Reserve</p>
<p>Cabinet <strong class="mc">Oiseau</p>
<p>Lavoir</p>
<p>Terrasse</p>
<p>Chambre d’enfant</p>
`, 10));
this.fragments.push(new Fragment(userService.journalist,
      ["vipère","vipere"],
      `Vipère`,
      `<p>Bibliothèque</p>
<p>Crypte</p>
<p>Laboratoire</p>
<p>Salle de bain</p>
<p>Grande salle</p>
<p>Salon polaire</p>
`, 11));
this.fragments.push(new Fragment(userService.journalist,
      ["panda"],
      `Panda`,
      `<p>Bureau <strong class="mc">Afrique</p>
<p>Chambre Roi</p>
<p>Grenier</p>
<p>Hall</p>
<p>Cave</p>
`, 12));
this.fragments.push(new Fragment(userService.journalist,
      ["ours"],
      `Ours`,
      `<p>Entrée</p>
<p>Serre</p>
<p>Bureau Chasse</p>
<p>Cuisine</p>
`, 13));
this.fragments.push(new Fragment(userService.journalist,
      ["mortebiere"],
      `Caen, Bar - Ce midi - Le briefing`,
      `<p>Je suis dans une petite pièce sombre. J’entends des rires et des chants de l’autre côté de la porte, venant d’un <strong class="mc">bar. On doit être six ou sept dans cette pièce, et dans la pénombre je n’arrive pas à voir les visages. Je reconnais <strong class="people">ERUDIT et <strong class="people">CHEF l’un à coté de l’autre. Il y a aussi <strong class="people">SOLDAT, ce doit être leur majordome. <strong class="people">CHEF commence la réunion en disant :</p>
<p>“- Bonjour à tous. Merci d’être là à l’heure. Pour des raisons de sécurité, vous n’avez pas été tenu au courant de la nature exacte de cette opération. Normalement on vous a prévenu que la <strong class="mc">mission était dangereuse.”</p>
<p>“- Oui, ils ont tous accepté en connaissance de cause.” &nbsp;confirme <strong class="people">ERUDIT</p>
<p>“- Le but de notre opération est d'empêcher un <strong class="mc">attentat, et de neutraliser tous les terroristes. Nous irons ce soir au châteaux nous infiltrer au <strong class="mc">mariage de Hector de La Grande Marche et Marie Elisabeth d’Autriche. Ce <strong class="mc">mariage c’est qu’un prétexte pour inviter une grande quantité de notable et dirigeant dans le but de les assassiner.</p>
<p>Nous savons que l’<strong class="mc">attentat surviendra quand tout le monde sera rassemblé dans la grande salle, à partir de minuit. Nous avons une bombe et notre seule chance d'empêcher le massacre est de la faire exploser exactement au bon moment et au bon endroit pour éliminer les terroristes à leur arrivée.”</p>
<p>“- Pourquoi ce n’est pas la police qui s’occupe de ça ?” &nbsp;je demande</p>
<p>“- C’est une <strong class="mc">mission délicate, et les instances dirigeantes préfères ne pas être impliquées. C’est pour ça que nous sommes chargés de résoudre le problème discrètement.” répond <strong class="people">CHEF.</p>
<p>“- Et je suppose que vous savez comment faire ?” demande sèchement une dame à côté de moi (<strong class="people">TELE)</p>
<p>“- Oui, nous savons de source sûre l’heure exacte où la bombe doit exploser. Et celle-ci est d’ailleurs déjà configurée” répond <strong class="people">CHEF en montrant la valise sur la table près de <strong class="people">SOLDAT</p>
<p>“- Et pour l’emplacement ? C’est habituellement plus simple à savoir !” relance-elle</p>
<p>“- <strong class="mc">Roberta, avec l’aide de <strong class="mc">Suzanne se chargera de localiser l’emplacement, et comme vous vous en doutez, vous serez chargé de placer la bombe.”</p>
<p>“- Ma carte servira à ce moment ? je demande</p>
<p>“- Oui, vous fournirez le <strong class="mc">plan du château pour aider à la localisation du por… de l’emplacement. Et de ce que vous cherchez dans le château par la même occasion.”</p>
<p>“- oui …” répondis-je, “j’ai le <strong class="mc">plan, enfin partiellement dessiné. Je ne vois toujours pas vraiment en quoi vos instructions vont nous aider vu que je sais comment mon camouflage fonctionne. Si je suis interrogé et menacé je ne vous promet pas de ne rien révéler.”</p>
<p>“Ne vous inquiétez pas, c’est là que notre dernier équipier intervient”.</p>
<p><strong class="people">CHEF se tourne vers la dernière personne tapie dans l’ombre.</p>
<p>“- Monsieur, comment dois-je vous appeler ?”</p>
<p>“- Heu … Jules … oui, c’est ça, Docteur Jules”</p>
<p>“- Bien docteur, vous avez la potion promise ?”</p>
<p>“- Oui, bien sûr la voilà” répond <strong class="people">MONSTRE en montrant un petit flacon.</p>
<p>“- Juste avant d’arriver au château, nous allons boire de cette potion. Ses effets sont très efficaces et nous permettront de <strong class="mc">pouvoir mentir et résister aux interrogatoire bien plus efficacement.“</p>
<p><strong class="people">CHEF se tourne vers moi et demande :</p>
<p>“- Ah ! Avez-vous les invitations ?”</p>
<p>Je sors de mon sac une grande enveloppe d’où j’extrais 4 petits cartons d’invitation. Il m’en prend 3.</p>
<p>“- Gardez en une pour vous”</p>
<p>Il distribue les invitations aux deux personnes les plus loin de moi. Impossible de voir leur visage, on dirait qu’ils se cachent dans l’ombre.</p>
`, 14, ["pouvoir"]));
this.fragments.push(new Fragment(userService.journalist,
      ["mémoire","memoire"],
      `Sur la route de Martinvast - Il y a quelques minutes`,
      `<p>Le château se profile au bout de l’allée. J’entend quelques petites tintement, <strong class="people">MONSTRE sort les fioles et commence à les distribuer aux autres puis prend la parole :</p>
<p>“- Buvez ça maintenant, ça va mettre quelque secondes à agir”</p>
<p>Tout le monde ouvre son falcon, je fais de même et boit son contenu d’une traite.</p>
<p>“- Hum, c’est bon ton médicament, docteur !” s’exclame <strong class="people">VOYANTE. Je réalise que je connais sa voix ! C’est ma fille ! Qu’est ce qu’elle fait ici ? Elle est beaucoup trop jeune et c’est trop dangereux ! Je m’exclame :</p>
<p>“- <strong class="mc">Rina&nbsp;… <strong class="mc">Rina c’est toi ? Arrêtez la voiture !”</p>
`, 15));
this.fragments.push(new Fragment(userService.monstre,
      ["paris"],
      `Paris - 25 novembre 1918 - Une nuit torride`,
      `<p>Le <strong class="mc">soleil se lève, je suis encore dans le <strong class="mc">lit. Il est bien situé cet appartement. Si un jour je devais m’installer quelque part, ça serait dans ce genre d’endroit. <strong class="mc"><strong class="people">JOURNALISTE à côté de moi dors encore. Je n’ai pas besoin de beaucoup de sommeil, c’est une particularité de mon métabolisme. La soirée d’hier était vraiment agréable. Je n’avais pas prévu qu’on se retrouverait au <strong class="mc">lit ensemble. Pendant une seconde je me demande si je pars discrètement, mais cette fille est chouette, et j’ai bien envie de la revoire.</p>
`, 0));
this.fragments.push(new Fragment(userService.monstre,
      ["mariage","marriage"],
      `Paris - 28 janvier 1919 - Je suis papa`,
      `<p>Comment <strong class="mc">enceinte ? Elle est <strong class="mc">enceinte, et de moi en plus ! Jamais j’aurais cru ça possible. Pas à moi. Quelle catastrophe. Je ne peux pas me marier, et m’installer, et certainement pas avec une humaine !</p>
<p>Pendant une seconde je me demande si je ne vais pas utiliser mon <strong class="mc">pouvoir. Mais je me ravise, ce n’est pas mon genre, et elle ne mérite pas ça. Pour certain de mon espèce c’est une habitude de s'échapper comme ça, mais pas moi.</p>
`, 1));
this.fragments.push(new Fragment(userService.monstre,
      ["sucette","bonbon","sucreries"],
      `Paris - 04 juillet 1924 - De retour`,
      `<p>Ça fait des mois que je ne suis pas venu. <strong class="mc"><strong class="people">JOURNALISTE ne m’en veut pas trop, et elle est toujours contente de me voire. Elle a fini par comprendre que je ne peux pas rester longtemps. “Mon métier m’en empêche”. <strong class="mc"><strong class="people">JOURNALISTE m’ouvre la porte :</p>
<p>“- Bonjour, je n’attendais pas ta visite”</p>
<p>“- Bonjour, je passe juste voir <strong class="people">VOYANTE. Ça fait longtemps, et je lui ai apporté des <strong class="mc">sucreries.”</p>
<p>“- Je l’appel, tu resteras pour dîner ?”</p>
<p>...</p>
`, 2));
this.fragments.push(new Fragment(userService.monstre,
      ["espion"],
      `Une étrange planète - 01 février 1925 - Échappé de justesse`,
      `<p>Ils sont juste derrière moi. Je cours sans me retourner. J’arrive dans grande pièce carrée, je ferme la porte derrière moi. Elle à l’air solide, ça devrait les retenir quelque secondes. Je glisse une chaise sous la poignée pour bloquer la porte. Je cherche un moyen de me sortir de là. La pièce est assez grande, une cheminée, deux grandes fenêtres sur chacun des murs, et on est au 3ème étage. Et une seule porte. Il n’y a pas d’autre issue. Ils arrivent, Je les entends tapper sur la porte. Ces monstres ne vont pas mettre longtemps à la défoncer.</p>
<p>Je crois que c’est la fin, je vais mourir ici. La porte commence à craquer, je sors mon révolver. J’ai 6 balles, ils sont au moins quatres, je ne pense pas que ça suffise. Je renverse le bureau qui est au milieu de la pièce, et je me mets en embuscade derrière.</p>
<p>Ça y est un des monstre commence à passer. Je lui tire quatre balles, en essayant de viser les points faible. Il ralentit à peine. Je tire mes 2 derniers coups. Je ne sais pas si ces créatures ont des points faibles…</p>
<p>Alors que les 4 créatures rentrent dans la pièce, la fenêtre derrière mon dos s’ouvre en grand. Une jeune femme, vêtue de noir, saute par la fenêtre, elle a dû venir de l’étage du dessus. Une corde pend dans l’ouverture de la fenêtre.</p>
<p>Elle court vers moi, et lance un objet rond qu’elle tient dans la main. L’objet passe au dessus de ma tête et atterrit entre les quatres monstre. D’un bond souple, et efficace elle me plaque au sol, derrière la table. Une <strong class="mc">explosion d’une puissance incroyable fait trembler toute la pièce. Avant que j’ai pu reprendre mes esprits, elle me relève en m'attrapant par le dos de ma chemise, et me pousse vers la fenêtre. Bizarrement, je me laisse faire. Peut être que je suis sous le choc, ou bien que je suis déjà sous son charme.</p>
<p>J’attrape la corde et me laisse glisser, elle me suis de près. <strong class="people">AGENT m’a sauvé la vie.</p>
`, 3));
this.fragments.push(new Fragment(userService.monstre,
      ["zurich"],
      `Zurich, Entrepôt en banlieu - 05 février 1927 -&nbsp;Une opération délicate`,
      `<p><strong class="people">AGENT m’a demandée de venir l’aider sur une opération un peu tendue. Peut être qu’elle aura besoin d’effacer la <strong class="mc">mémoire de deux humains. Elle sait que je ne peux rien lui refuser.</p>
<p>…</p>
<p>On a décidé que je resterai en arrière, sans me faire repérer. Je n’interviendrais que s’il y a besoin. La connaissant il n’y aura pas besoin, elle se débrouille bien toute seule. Je la soupçonne d’avoir utilisé cette <strong class="mc">mission comme excuse pour me voir. Depuis deux ans qu’on se connaît, on ne devrait plus avoir besoin de ce genre d’excuse.</p>
<p>Je la suis de loin, comme prévue. Elle rencontre <strong class="people">CHEF et <strong class="people">SOLDAT, je me demande si elle va leur dire que c’est grâce à eux qu’elle a trouvé le <strong class="mc">portail. Elle a posée la bombe, je pense qu’elle ne leur a pas dit que ce que c’était. Ils vont avoir une drôle de surprise.</p>
<p>La bombe a explosé au bon moment, et le <strong class="mc">portail est définitivement fermé, la <strong class="mc">mission et un succès.</p>
<p>Je vais <strong class="mc">pouvoir rentrer avec <strong class="people">AGENT. J’ai loué une chambre d'hôtel pour la nuit, ça sera parfait !</p>
`, 4));
this.fragments.push(new Fragment(userService.monstre,
      ["vacances","plage","maria"],
      `Une étrange planète - 21 décembre 1930 - De délicieuses vacances`,
      `<p>Le ciel est magnifique sur ce <strong class="mc">plan. Les deux soleils se couchent presque en même temps et éclairent la mer d’un rouge pastel. On est les deux seules personnes sur cette <strong class="mc">plage, assis main dans la main. Je n’ai jamais vu d'endroit aussi beau. Peut être est-ce aussi parce que j’y suis avec <strong class="people">AGENT.</p>
<p>Ça fait une semaine qu’on est sur ce <strong class="mc">plan. Personne ne sait qu’on est ici. Ni mes supérieur&nbsp;ni les siens. Je n’ai jamais été aussi heureux.</p>
`, 5));
this.fragments.push(new Fragment(userService.monstre,
      ["psycheïde","psycheïdes","psycheide"],
      `Sur mon plan - 08 octobre 1936 - Home sweet home`,
      `<p>J’ai été convoqué par <strong class="people">SUPERIEUR. Je pense qu’il s’inquiète que je passe trop de temps à rechercher <strong class="people">AGENT plutôt qu'à m’occuper des missions qu’il me donne. Mais ça fait des mois qu’elle n’a pas donnée signe de vie. Impossible de retrouver sa trace.</p>
<p>Malgré tout, ça fait plaisir de se retrouver sur le <strong class="mc">plan <strong class="mc">psycheïde. La terre c’est bien, mais il n’y a rien de mieux que d’être chez soi.</p>
`, 6));
this.fragments.push(new Fragment(userService.monstre,
      ["pouvoir"],
      `Sur mon plan - 08 octobre 1936 - Une nouvelle mission`,
      `<p>J’arrive dans le bureau de <strong class="people">SUPERIEUR. Il est assis derrière son grand bureau, un verre de whisky à la main, et me dit :</p>
<p>“- Je n'irais pas par quatres chemins, je sais que vous passez le plus claire de votre temps à la recherche de <strong class="mc">Maria. Et votre <strong class="mc">mission actuelle n’avance pas.”</p>
<p>“- ...”</p>
<p>“- J’ai donc décidé d’annuler votre <strong class="mc">mission actuelle … Et de vous donner une autre <strong class="mc">mission. On sait où va se trouver <strong class="mc">Maria. Elle devrait arriver au Château de <strong class="mc">Martinvast&nbsp;le 28 octobre.”</p>
<p>“- Le château de <strong class="mc">Martinvast&nbsp;! Mais c’est le repère des <strong class="mc">Dahona&nbsp;! Ils l’ont capturée ? Il faut que j’aille la sortie de là !”, je m'exclame.</p>
<p>“- Calmez vous ! Je ne veux pas d’incident. Rappelez-vous c’est sur terre, un <strong class="mc">plan neutre. Si on agit ouvertement la bas, tous les autres plans vont nous tomber dessus. Laissez moi finir.”</p>
<p>“- Je vous écoute” dis-je un peu plus calme.</p>
<p>“- On pense que le <strong class="mc">Dahona&nbsp;veulent prendre le contrôle sur terre. S’ils y arrivent, c’est la fin de l’équilibre actuel, et il y aura une guerre ouverte entre tous les plans connu. Et les terriens que vous avez l’air d'apprécier risque de ne pas survivre bien longtemps.”</p>
<p><strong class="people">SUPERIEUR s'arrête pour boire une gorgée, et reprend:</p>
<p>“- On pense qu’ils veulent dévorer les âmes d’un maximum de dignitaires et de personnes bien placés, pendant une cérémonie. La cérémonie se déroulera dans exactement 20 jours.”</p>
<p>“- Comment voulez vous que je procède. Si on ne peut pas intervenir directement ça va être dure de les arrêter.”</p>
<p>“- Ils y a quelques humains qui vont intervenir le jour de la cérémonie. <strong class="mc">Maria&nbsp;se trouvera là, prisonnière des <strong class="mc">Dahona. Votre <strong class="mc">mission est d’aider les humains à entrer dans le château. Ils devront passer des sentinelles qui peuvent lire dans les pensée. Il vous suffira d’utiliser votre <strong class="mc">pouvoir pour leur permettre de passer”</p>
<p>“- Il y a un risque que leur <strong class="mc">mémoire ne revienne pas à temps vous savez !”</p>
<p>“- Ils sont déjà au courant des risques, et si vous maitrisez bien votre <strong class="mc">pouvoir tout devrait bien se passer.”</p>
<p><strong class="people">SUPERIEUR se penche vers moi, et me regarde dans les yeux et dit :</p>
<p>“- En aucun cas vous ne devez prendre part à la <strong class="mc">mission, vous devez seulement les faire rentrer. Ils sont briefés à propos de <strong class="mc">Maria. J’ai insisté pour que ce soit vous qui vous chargiez de cette <strong class="mc">mission, ne me faites pas regretter ça.”</p>
<p>Il faut que j’aille sur place, je ne fais pas confiance aux humains. Je trouverais forcément dans le châteaux des documents indiquant où est <strong class="mc">Maria est tenu captive !</p>
`, 7));
this.fragments.push(new Fragment(userService.monstre,
      ["fiole"],
      `Caen, Bar - Ce midi - Le briefing`,
      `<p>Je suis dans une petite pièce sombre, parfait pour la discrétion. J’entends des rires et des chants de l’autre côté de la porte, venant d’un <strong class="mc">bar. On doit être six ou sept dans cette pièce, et dans la pénombre c’est difficile de savoir qui est qui. Je reconnais <strong class="people">ERUDIT et <strong class="people">CHEF l’un à coté de l’autre. Et évidemment <strong class="people">SOLDAT est avec eu. Je ressens une présence que je n’ai pas vu depuis longtemps. C’est <strong class="mc"><strong class="people">JOURNALISTE, et sa fille est là. Il faut que je fasse en sorte qu’elles ne me reconnaissent pas. <strong class="people">CHEF commence la réunion, et j’écoute d’une oreille distraite.</p>
<p>Il ne parle pas de <strong class="people">AGENT, mais ça ne veut pas dire qu’il n’est pas au courrant pour elle.</p>
<p>Ha, <strong class="people">CHEF me parle, il faut que je sois un peu plus attentif, il se tourne vers moi et dit :</p>
<p>“- Monsieur, comment dois-je vous appeler ?”</p>
<p>“- Heu … Jules … oui, c’est ça, Docteur Jules”, j’invente ce nom un peu au hasard. Il m’a pris de court.</p>
<p>“- Bien docteur, vous avez la potion promise ?”</p>
<p>“- Oui, bien sûr la voilà” je réponds en montrant un petit flacon. Ils ne savent pas qu’en réalité ce n’est que de l’eau sucrée avec un peu de colorant. C’est tout ce que j’ai trouvé pour cacher mon <strong class="mc">pouvoir. <strong class="people">CHEF continue :</p>
<p>“- Juste avant d’arriver au château, nous allons boire de cette potion. Ses effets sont très efficaces et nous permettront de <strong class="mc">pouvoir mentir et résister aux interrogatoire bien plus efficacement.“</p>
<p>Il y a <strong class="people">VOYANTE qui se rapproche de moi, on dirait qu’elle essaye de voir qui je suis. J’espère qu’elle ne m’a pas reconnue.</p>
<p><strong class="people">CHEF finit le briefing en distribuant les invitations qui nous permettrons de rentrer au château.</p>
`, 8));
this.fragments.push(new Fragment(userService.monstre,
      ["mémoire","memoire"],
      `Sur la route de Martinvast - Il y a quelques minutes`,
      `<p>Le château se profile au bout de l’allée. Je sors les fioles et commence à les distribuer aux autres puis je prends la parole :</p>
<p>“- Buvez ça maintenant, ça va mettre quelque secondes à agir”</p>
<p>Tout le monde est occupé à boire cette fausse potion, c’est le moment de lancer mon sort. Je murmure la formule, et fait les gestes discrètement. Pour un sort de cette importance, normalement j’aurais du prendre mon temps, parler à voix haute et faire de grands gestes... J’espère que ça va fonctionner comme prévu. Si j’efface trop de chose on ne se souviendra plus de rien, et ça va être difficile de faire la <strong class="mc">mission. Et si je n'efface pas assez, on se fera prendre à l’entrée et c’est la mort assurée.</p>
<p>Tout d’un coup <strong class="people">TELE s’exclame :</p>
<p>“- C’est un piège !”</p>
<p>Mince, j’ai oublier de boire ma <strong class="mc">fiole, et maintenant elle doit croire que je les ai empoisonné.</p>
<p>Heureusement mon sort commence à faire effet.</p>
`, 9));


  }


  public getById(id: string) {
    return this.fragments.find(f => f.id === id);
  }
}
