/* All names, dates, member numbers, and addresses below are fictional training data. */
const sources = {
  ohpVerify: {name:"OHA · Verify OHP eligibility and CCO", url:"https://www.oregon.gov/oha/hsd/ohp/pages/eligibility-verification.aspx", org:"Oregon Health Authority"},
  ohpId: {name:"OHA · Oregon Health ID and 8-digit client ID", url:"https://www.oregon.gov/oha/hsd/ohp/pages/eligibility.aspx", org:"Oregon Health Authority"},
  ohpOther: {name:"OHA · OHP with other insurance", url:"https://www.oregon.gov/OHA/HSD/OHP/Pages/Insurance.aspx", org:"Oregon Health Authority"},
  ohpCopay: {name:"OHA · OHP Plus copayment guidance", url:"https://www.oregon.gov/oha/HSD/OHP/Tools/General%20Rules%20Provider%20Guide.pdf", org:"Oregon Health Authority"},
  ohpLane: {name:"OHA · Lane County CCO changes", url:"https://www.oregon.gov/oha/HSD/OHP/pages/cco-changes.aspx", org:"Oregon Health Authority"},
  medicareParts: {name:"Medicare · Parts and coverage options", url:"https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/parts-of-medicare", org:"Medicare.gov"},
  medicareED: {name:"Medicare · Emergency department costs", url:"https://www.medicare.gov/coverage/emergency-department-services", org:"Medicare.gov"},
  medicareStatus: {name:"Medicare · Inpatient versus outpatient", url:"https://www.medicare.gov/coverage/inpatient-hospital-care/inpatient-outpatient-status", org:"Medicare.gov"},
  medicareCard: {name:"CMS · Medicare Beneficiary Identifier format", url:"https://www.cms.gov/medicare/new-medicare-card/understanding-the-mbi.pdf", org:"CMS"},
  medicareMA: {name:"Medicare · Use the active plan card", url:"https://www.medicare.gov/basics/get-started-with-medicare/using-medicare/your-medicare-card", org:"Medicare.gov"},
  medigap: {name:"Medicare · How Medigap works", url:"https://www.medicare.gov/health-drug-plans/medigap/basics/how-medigap-works", org:"Medicare.gov"},
  msp: {name:"CMS · Medicare Secondary Payer overview", url:"https://www.cms.gov/medicare/coordination-benefits-recovery/overview/secondary-payer", org:"CMS"},
  mspQuestions: {name:"CMS · Hospital MSP intake questions", url:"https://www.cms.gov/medicare/coordination-of-benefits-and-recovery/providerservices/partaotherinsurerintaketool", org:"CMS"},
  dual: {name:"Medicare · Medicaid and Medicare together", url:"https://www.medicare.gov/basics/costs/help/medicaid", org:"Medicare.gov"},
  qmb: {name:"CMS · QMB billing protections", url:"https://www.cms.gov/medicare/medicaid-coordination/about/qualified-medicare-beneficiary-program", org:"CMS"},
  tricare: {name:"TRICARE · For Life", url:"https://tricare.mil/Plans/HealthPlans/TFL", org:"TRICARE"},
  tricareId: {name:"TRICARE · Benefits number on ID card", url:"https://tricare.mil/Plans/Eligibility/IDCards/ShowingYourID", org:"TRICARE"},
  champva: {name:"VA · CHAMPVA and other insurance", url:"https://www.va.gov/resources/champva-care/", org:"U.S. Department of Veterans Affairs"},
  vaED: {name:"VA · Emergency care at non-VA facilities", url:"https://www.va.gov/resources/getting-emergency-care-at-non-va-facilities/", org:"U.S. Department of Veterans Affairs"},
  work: {name:"Oregon WCD · Work injury claim and Form 827", url:"https://wcd.oregon.gov/worker/Pages/file-a-claim.aspx", org:"Oregon Workers' Compensation Division"},
  oneSource: {name:"Experian Health · OneSource eligibility", url:"https://www.experian.com/healthcare/products/patient-access-registration/insurance-eligibility-verification", org:"Experian Health"}
};

const common = {
  payerContact:"VERIFY — use the live payer record, not this sample",
  effective:"VERIFY — eligibility for date of service",
  insuredGender:"VERIFY if required; do not infer from name",
  release:"NOT SET — follow the authorized local process",
  assignment:"NOT SET — follow the authorized local process",
  verified:"NO — a training card is not an eligibility response"
};

const cases = [
  {
    id:"original-medicare", title:"Original Medicare", group:"Medicare", tag:"Red, white & blue card",
    gist:"Part A is hospital insurance; Part B usually covers an emergency department visit until a formal inpatient admission.",
    combos:"May be alone, with Medigap, OHP, retiree or current-employment coverage. Ask MSP questions.",
    cost:"ED copay and Part B deductible/coinsurance may apply; admission and other coverage can change the amount.",
    verify:"OneSource only if MWMC enables a Medicare eligibility connection; otherwise its approved Medicare lookup. MMIS only for accompanying OHP.",
    look:"11-character MBI on the Original Medicare card; a red-white-blue card may coexist with an active Advantage plan.",
    nuance:"Do not infer Medicare is first solely from age or a card. Ask about current work, spouse's work, injury, and other coverage through the approved MSPQ.",
    refs:["medicareParts","medicareED","medicareStatus","medicareCard","mspQuestions"],
    scenario:"Mara Ellis presents an Original Medicare card. The exercise assumes a completed eligibility check and MSPQ find no other active payer.",
    name:"Mara Ellis", dob:"05/14/1954", member:"1EG4TE5MK73 (CMS sample MBI; no dashes entered)", groupNo:"N/A — no group number on Original Medicare card", mbi:"1EG4TE5MK73 (CMS sample)",
    primary:"Original Medicare — after eligibility and MSPQ", secondary:"None shown or reported in this exercise", payer:"Original Medicare — select exact local entry", relation:"Self", employer:"N/A in this exercise", comment:"Training note: eligibility and MSPQ checked; no other payer reported. Record real actions only.",
    quiz:["Original Medicare automatically, because the card is present","Confirm active coverage and MSPQ before selecting payer order","A Medigap plan, even though none was presented"], answer:1
  },
  {
    id:"medicare-advantage", title:"Medicare Advantage", group:"Medicare", tag:"Private plan + Medicare benefits",
    gist:"A private Medicare plan (Part C) handles medical claims when its enrollment is active. The patient may still carry an Original Medicare card.",
    combos:"May be paired with OHP or CHAMPVA; Medigap does not pay Advantage copays.",
    cost:"ED copay, deductible, or coinsurance depends on the exact Advantage plan; check its benefits.",
    verify:"OneSource if the exact Advantage payer is connected at MWMC; otherwise the approved plan portal. Use MMIS too if OHP is present.",
    look:"The insurer's card says Medicare Advantage, Part C, or an MA product; use its plan member ID.",
    nuance:"Do not choose Original Medicare as the medical payer just because the patient also has a Medicare card. Verify the active product and exact payer.",
    refs:["medicareMA","medicareParts","medigap"],
    scenario:"Daniel Brooks shows a fictional Regence Medicare Advantage card and a red-white-blue Medicare card. The exercise assumes the Advantage plan is active.",
    name:"Daniel Brooks", dob:"08/09/1958", member:"DEMO-MA-004 (fictional, not a valid member ID)", groupNo:"DEMO-GRP-4 (fictional)", mbi:"VERIFY if separately required; do not replace the plan ID", primary:"Active Regence Medicare Advantage plan", secondary:"None reported in this exercise", payer:"Regence Medicare Advantage — exact local product needs confirmation", relation:"Self", employer:"N/A in this exercise", comment:"Training note: Advantage eligibility checked; plan card used for medical payer.",
    quiz:["Original Medicare card as primary medical payer","The active Advantage plan's exact payer entry","Both Original Medicare and Advantage as separate primary plans"], answer:1
  },
  {
    id:"medigap", title:"Original Medicare + Medigap", group:"Medicare", tag:"A supplement, not Part C",
    gist:"Medigap is private supplemental insurance that helps with some Original Medicare out-of-pocket costs.",
    combos:"Original Medicare first, Medigap after it when both policies are active. A standalone Part D card is for prescriptions.",
    cost:"The supplement may reduce cost sharing; the plan letter and exact benefits matter.",
    verify:"OneSource/approved Medicare lookup for Original Medicare; OneSource or the supplement's approved portal for Medigap. MMIS if OHP also exists.",
    look:"A card marked Medicare Supplement or Medigap, often with a plan letter such as G or N; distinct from Advantage.",
    nuance:"Medigap cannot be used to pay Medicare Advantage copays, deductibles, or premiums.",
    refs:["medigap","medicareED","medicareCard"],
    scenario:"Avery Chen shows Original Medicare and a fictional Medigap Plan G card. The exercise assumes both are active.",
    name:"Avery Chen", dob:"03/07/1950", member:"DEMO-MEDIGAP-03 (fictional)", groupNo:"Not shown on sample supplement card", mbi:"1EG4TE5MK73 (CMS sample; training reuse)", primary:"Original Medicare", secondary:"Medigap Plan G — if verified active", payer:"Primary: Original Medicare; secondary: exact supplement payer entry", relation:"Self", employer:"N/A in this exercise", comment:"Training note: separate Medicare and supplement records; both eligibility checks completed in scenario.",
    quiz:["Medigap first, Medicare second","Original Medicare first, Medigap second","Medigap is the same as Medicare Advantage"], answer:1
  },
  {
    id:"dual", title:"Medicare + OHP", group:"Combined", tag:"Dual eligible",
    gist:"The person has both Medicare and Oregon Medicaid. For Medicare-covered services, Medicare is generally first and OHP may be secondary.",
    combos:"Original Medicare or an Advantage plan may coexist with OHP. Verify which Medicare product is active, the OHP benefit package, and QMB status.",
    cost:"Do not assume a patient balance. QMB members cannot be billed Medicare Part A/B cost sharing for Medicare-covered services.",
    verify:"Approved Medicare/Advantage eligibility source (OneSource if enabled) AND MMIS for OHP, CCO/Open Card, TPL and benefit package.",
    look:"A Medicare or Advantage card plus an Oregon Health ID/CCO card; absence of a second card does not rule OHP out.",
    nuance:"Check whether the OHP coverage is full benefit, limited benefit, or QMB; these are not interchangeable.",
    refs:["dual","qmb","ohpVerify","ohpOther"],
    scenario:"Nina Patel presents Original Medicare and an Oregon Health ID. The exercise assumes MMIS confirms OHP and QMB for this date.",
    name:"Nina Patel", dob:"11/21/1952", member:"00000000 (fictional OHP training ID)", groupNo:"N/A for the OHP sample", mbi:"1EG4TE5MK73 (CMS sample; training reuse)", primary:"Original Medicare for Medicare-covered service", secondary:"OHP — exact CCO/Open Card entry after MMIS", payer:"Two separate records: Medicare and MMIS-confirmed OHP plan", relation:"Self", employer:"N/A in this exercise", comment:"Training note: both sources checked; QMB flag confirmed in exercise; do not collect Medicare cost share.",
    quiz:["OHP always before Medicare","Check both programs and QMB; Medicare usually first for Medicare-covered services","Bill the patient a Medicare copay without checking QMB"], answer:1
  },
  {
    id:"ohp-cco", title:"OHP with a CCO", group:"OHP", tag:"Oregon Health ID + CCO",
    gist:"OHP is Oregon Medicaid. A CCO, such as Trillium in Lane County, administers many covered services for enrolled members.",
    combos:"May be OHP alone. If Medicare or private insurance exists, investigate the other payer and OHP's secondary role.",
    cost:"No OHP Plus copayment for covered services. Verify the actual benefit package and avoid assuming every service is covered.",
    verify:"MMIS Provider Portal for eligibility, benefit package, CCO enrollment, and TPL on the date of service; CCO portal for plan-specific details.",
    look:"Oregon Health ID has an 8-digit client ID; a separate CCO card may name Trillium. Older PacificSource Lane CCO cards may be outdated after the 2026 transition.",
    nuance:"A CCO logo alone does not establish current enrollment. MMIS is the statewide source for the active date and plan.",
    refs:["ohpVerify","ohpId","ohpCopay","ohpLane"],
    scenario:"Leah Morgan presents an Oregon Health ID and a Trillium card. MMIS is assumed to show active OHP Plus and Trillium, no TPL.",
    name:"Leah Morgan", dob:"04/18/1995", member:"00000000 (fictional 8-digit training ID)", groupNo:"N/A for OHP sample", mbi:"N/A", primary:"Trillium CCO — after MMIS confirms enrollment", secondary:"None shown in exercise", payer:"Exact Trillium/OHP entry from current directory", relation:"Self", employer:"N/A in this exercise", comment:"Training note: MMIS date, benefit package, CCO and TPL checked; no OHP Plus copay.",
    quiz:["Use the old card's logo without checking","Verify today's OHP and CCO in MMIS","Assume every OHP member is on Open Card"], answer:1
  },
  {
    id:"ohp-open", title:"OHP Open Card", group:"OHP", tag:"Fee-for-service OHP",
    gist:"Open Card is OHP coverage administered by Oregon Health Authority rather than a CCO for the applicable service.",
    combos:"Can occur alone or with Medicare/private coverage. Other medical insurance generally pays first when present.",
    cost:"No OHP Plus copayment for covered services; confirm the actual benefit package and any other payer.",
    verify:"MMIS for active OHP, benefit package, Open Card status, and TPL; OneSource/approved portal separately for any private or Medicare plan.",
    look:"Oregon Health ID without current CCO enrollment shown in MMIS; do not infer Open Card just because no CCO card is available.",
    nuance:"OHA bills fee-for-service Open Card claims; this is distinct from sending a CCO claim.",
    refs:["ohpVerify","ohpOther","ohpCopay"],
    scenario:"Sam Ortega has an Oregon Health ID but no CCO card. MMIS is assumed to show active OHP Plus Open Card with no other coverage.",
    name:"Sam Ortega", dob:"01/30/1984", member:"00000000 (fictional 8-digit training ID)", groupNo:"N/A", mbi:"N/A", primary:"OHP Open Card — confirmed in MMIS", secondary:"None shown in exercise", payer:"OHA fee-for-service / exact Open Card entry", relation:"Self", employer:"N/A in this exercise", comment:"Training note: MMIS confirms Open Card, benefit package and no recorded TPL.",
    quiz:["No CCO card automatically means Open Card","Use MMIS to confirm Open Card status","Select Trillium for every Lane County member"], answer:1
  },
  {
    id:"commercial", title:"Employer or private plan", group:"Private", tag:"Commercial insurance",
    gist:"A plan bought through work, a union, the marketplace, or individually. The name on a network logo may differ from the actual claims payer.",
    combos:"Can be alone, paired with OHP, or coordinated with Medicare. Current employment and employer size can change Medicare payer order.",
    cost:"Copay, deductible and coinsurance vary by product and emergency benefit. Do not copy a number from another patient's plan.",
    verify:"OneSource if MWMC has this payer connection; otherwise its approved payer portal. Use MMIS only if OHP is also present.",
    look:"Issuer, plan/product, member ID, group number, subscriber, relationship, and claims contact. RxBIN/RxPCN are pharmacy routing fields.",
    nuance:"The payer name, product and active date matter more than the card color or a familiar insurer logo.",
    refs:["oneSource","msp","ohpOther"],
    scenario:"Taylor Reed presents a fictional employer-sponsored Regence PPO card. The exercise assumes eligibility confirms this is the only plan.",
    name:"Taylor Reed", dob:"09/02/1989", member:"DEMO-PPO-021 (fictional)", groupNo:"DEMO-GROUP-2 (fictional)", mbi:"N/A", primary:"Verified employer PPO", secondary:"None reported in exercise", payer:"Exact Regence PPO product in local directory", relation:"Self", employer:"Example Works LLC (fictional)", comment:"Training note: full ID, group, product and ED benefit checked with approved source.",
    quiz:["A network logo alone identifies the claims payer","Verify issuer, exact product, eligibility and member ID","RxBIN is the medical member ID"], answer:1
  },
  {
    id:"private-ohp", title:"Private plan + OHP", group:"Combined", tag:"Other insurance + Medicaid",
    gist:"When a person has private medical coverage and OHP, the private plan generally pays first; OHP may help after it.",
    combos:"OHP may be Open Card rather than a CCO when another private medical plan is active. Check MMIS instead of assuming.",
    cost:"The private plan may list a copay or deductible, but OHP may affect the final patient responsibility. Verify before collecting.",
    verify:"OneSource/approved private payer portal for the commercial plan AND MMIS for OHP benefit package, TPL and CCO/Open Card.",
    look:"An employer or marketplace card plus Oregon Health ID. The OHP card might be missing at check-in.",
    nuance:"Ask about all cards. An MMIS TPL record can show other coverage, but verify the private plan's current eligibility separately.",
    refs:["ohpOther","ohpVerify","ohpCopay"],
    scenario:"Riley Gomez shows a fictional employer plan and an Oregon Health ID. The exercise assumes both are active and MMIS shows Open Card secondary.",
    name:"Riley Gomez", dob:"06/25/1997", member:"DEMO-COMM-009; OHP 00000000 (fictional)", groupNo:"DEMO-GROUP-9 (fictional)", mbi:"N/A", primary:"Verified employer medical plan", secondary:"OHP Open Card — per MMIS exercise response", payer:"Two records: exact commercial product, then MMIS-confirmed OHP", relation:"Self", employer:"Example Works LLC (fictional)", comment:"Training note: commercial eligibility and MMIS TPL/benefit package checked; patient responsibility not presumed.",
    quiz:["OHP first because the card is newest","Private medical plan first in this exercise; verify OHP as secondary","Skip MMIS when a commercial card exists"], answer:1
  },
  {
    id:"tfl", title:"TRICARE For Life", group:"Military / VA", tag:"Medicare-wraparound coverage",
    gist:"TRICARE For Life generally wraps Medicare for people eligible for TRICARE who have Medicare Parts A and B.",
    combos:"Medicare generally first and TRICARE For Life after it for Medicare-covered care in the U.S.; other insurance or special service rules can alter order.",
    cost:"TRICARE may cover some remaining Medicare cost sharing; the service and eligibility control the result.",
    verify:"Approved Medicare eligibility source and TRICARE eligibility/claim workflow. OneSource only if its relevant connections are enabled; MMIS only if OHP also exists.",
    look:"Uniformed Services ID: 11-digit DoD Benefits Number on back. Do not substitute the 10-digit DoD ID on front for claims.",
    nuance:"An old note saying to use a sponsor SSN is not a verified MWMC instruction. Confirm the correct sensitive identifier in the approved workflow.",
    refs:["tricare","tricareId","msp"],
    scenario:"Chris Vale shows Medicare and a Uniformed Services ID. The exercise assumes TRICARE For Life eligibility and Medicare A/B are confirmed.",
    name:"Chris Vale", dob:"02/16/1956", member:"00000000000 (fictional 11-digit DBN)", groupNo:"N/A in this exercise", mbi:"1EG4TE5MK73 (CMS sample; training reuse)", primary:"Original Medicare for Medicare-covered service", secondary:"TRICARE For Life — after eligibility", payer:"Medicare plus exact TRICARE For Life entry", relation:"Self", employer:"N/A in exercise", comment:"Training note: Medicare A/B and TRICARE eligibility checked; DBN from back of sample card.",
    quiz:["Use the 10-digit DoD ID from the card front as the claim ID","Confirm Medicare A/B and use the approved TRICARE identifier","Assume TRICARE For Life is a Medicare Advantage plan"], answer:1
  },
  {
    id:"champva", title:"CHAMPVA", group:"Military / VA", tag:"VA family-member benefit",
    gist:"CHAMPVA is a VA health benefits program for eligible family members; it is not the same as a veteran's VA care.",
    combos:"Usually secondary to Medicare or other health insurance; it can be primary when there is no other insurance, with listed exceptions.",
    cost:"Cost sharing depends on CHAMPVA and any primary coverage. Confirm rather than assuming a fixed ED copay.",
    verify:"VA CHAMPVA eligibility/claim channel and the approved primary payer source. OneSource only if configured; MMIS only if OHP exists.",
    look:"CHAMPVA identification plus any Medicare or other medical plan card. Do not label it TRICARE or VA Community Care.",
    nuance:"VA says CHAMPVA is secondary to Medicare, including a Medicare Advantage plan, when the patient has both.",
    refs:["champva"],
    scenario:"Jamie Ford shows a fictional CHAMPVA card and an active Medicare Advantage card. The exercise assumes both are verified.",
    name:"Jamie Ford", dob:"10/05/1959", member:"DEMO-CHAMPVA-7 (fictional)", groupNo:"N/A in exercise", mbi:"VERIFY if separately needed; Advantage plan ID is separate", primary:"Active Medicare Advantage plan", secondary:"CHAMPVA — after eligibility", payer:"Exact Advantage product plus CHAMPVA entry", relation:"Self", employer:"N/A in exercise", comment:"Training note: both coverages checked; CHAMPVA not confused with VA care.",
    quiz:["CHAMPVA is always first to Medicare","Medicare plan first, CHAMPVA second in this exercise","CHAMPVA is another name for TRICARE For Life"], answer:1
  },
  {
    id:"work-injury", title:"Workers' compensation", group:"Injury / claim", tag:"Injury on the job",
    gist:"A work-related injury may be covered by the employer's workers' compensation carrier. Claim status and responsible carrier need confirmation.",
    combos:"Medicare or private insurance might also exist. For an accepted work-related claim, workers' compensation is responsible for related covered care.",
    cost:"Do not promise a zero balance before confirming the claim, coverage, and local collection process.",
    verify:"Authorized workers' comp claim/carrier workflow and employer details. OneSource or MMIS alone cannot establish claim acceptance.",
    look:"Patient reports injury at work; collect employer, date of injury, carrier/claim information if known. Oregon Form 827 involves patient and provider.",
    nuance:"If Medicare exists, the MSPQ matters. Do not turn a reported work injury into a confirmed, billable claim without verification.",
    refs:["work","msp"],
    scenario:"Robin Park says the injury occurred at work and brings a fictional carrier notice. The exercise assumes a claim number but not an acceptance decision.",
    name:"Robin Park", dob:"12/03/1980", member:"DEMO-CLAIM-827 (fictional claim reference)", groupNo:"N/A", mbi:"N/A in exercise", primary:"PENDING — workers' comp carrier/claim responsibility", secondary:"VERIFY other coverage and claim outcome", payer:"Carrier entry only after authorized verification", relation:"Self", employer:"Example Manufacturing LLC (fictional)", comment:"Training note: patient reports work injury; claim reference supplied; acceptance not yet confirmed.",
    quiz:["Mark the work claim accepted from the patient's report alone","Verify carrier and claim status before treating it as confirmed","Use MMIS as the workers' comp claim portal"], answer:1
  },
  {
    id:"mva", title:"Motor vehicle accident", group:"Injury / claim", tag:"Auto / no-fault / liability",
    gist:"Accident-related care can involve auto no-fault or liability coverage before Medicare, depending on the actual claim and rules.",
    combos:"The patient may also have Medicare, commercial insurance or OHP. The payer order for unrelated care can differ.",
    cost:"Personal responsibility and any copay depend on confirmed coverage and claim handling; do not infer from the collision alone.",
    verify:"Authorized auto insurer/claim workflow; approved medical payer lookup for other coverage. OneSource/MMIS do not establish the auto claim by themselves.",
    look:"Ask about the accident, auto insurer, claim/reference, insured person and other medical coverage if available.",
    nuance:"For Medicare beneficiaries, applicable no-fault/liability coverage may pay first for accident-related services; document facts, not assumptions.",
    refs:["msp"],
    scenario:"Alex Rivera reports a car crash and provides a fictional auto claim reference, but no confirmed coverage decision.",
    name:"Alex Rivera", dob:"07/11/1972", member:"DEMO-AUTO-018 (fictional claim reference)", groupNo:"N/A", mbi:"N/A in exercise", primary:"PENDING — applicable auto coverage not confirmed", secondary:"VERIFY medical coverage and coordination", payer:"Exact auto/medical payer only after verification", relation:"Self", employer:"N/A", comment:"Training note: accident described; auto insurer/claim given by patient; coverage unconfirmed.",
    quiz:["Auto insurance is always primary for every service afterward","Confirm the claim and whether services relate to the accident","MMIS confirms the auto claim"], answer:1
  },
  {
    id:"va-emergency", title:"VA emergency care", group:"Military / VA", tag:"Veteran at a non-VA ED",
    gist:"A veteran's VA care is a separate program from TRICARE or CHAMPVA. Emergency treatment should proceed without waiting for VA authorization.",
    combos:"The veteran may have Medicare or private insurance. VA coverage and coordination depend on eligibility and the emergency episode.",
    cost:"Do not assume VA payment or a patient copay from veteran status alone; verify VA's decision and other coverage.",
    verify:"VA emergency care notification/authorization workflow; not OneSource or MMIS alone. Notify VA as soon as possible under the applicable process.",
    look:"Patient identifies as a veteran or presents VA information. Record the actual program and other cards, not just 'VA' as a generic payer.",
    nuance:"VA states it must receive notification within 72 hours of non-VA emergency care; follow the hospital's current escalation route.",
    refs:["vaED"],
    scenario:"Morgan Lee reports VA enrollment at a non-VA ED and also has Medicare. VA coverage for this episode has not been determined.",
    name:"Morgan Lee", dob:"01/04/1965", member:"DEMO-VA-INFO (fictional reference)", groupNo:"N/A", mbi:"1EG4TE5MK73 (CMS sample; training reuse)", primary:"PENDING — episode-specific VA/other payer decision", secondary:"VERIFY Medicare and coordination", payer:"Do not select an unconfirmed VA payer entry", relation:"Self", employer:"N/A", comment:"Training note: veteran status reported; VA emergency notification and payer decision pending.",
    quiz:["Wait for VA authorization before ED screening","Treat immediately and route VA notification under the current process","TRICARE and VA care are the same payer"], answer:1
  },
  {
    id:"unknown", title:"No card or coverage uncertain", group:"Other", tag:"Do not guess self-pay",
    gist:"A missing card is not proof that a patient has no coverage. Continue care and use the approved search and follow-up process.",
    combos:"Possible active Medicare, OHP, private coverage, or no insurance; ask what the patient knows without delaying ED care.",
    cost:"Do not invent a copay or make a final self-pay determination from a missing card.",
    verify:"Approved coverage search; MMIS can check possible OHP using name and date of birth. OneSource only if enabled for the relevant payer/workflow.",
    look:"No card, outdated card, or a patient unsure of plan name. Match identity first and record what is actually known.",
    nuance:"OHA permits an MMIS eligibility search by first name, last name and date of birth when an Oregon Health ID is unavailable.",
    refs:["ohpVerify","ohpId","oneSource"],
    scenario:"Casey Hall has no card and thinks there may be OHP coverage. No eligibility response is available in the exercise.",
    name:"Casey Hall", dob:"09/15/1968", member:"UNKNOWN — do not invent a number", groupNo:"UNKNOWN", mbi:"UNKNOWN", primary:"PENDING — coverage search needed", secondary:"PENDING", payer:"No payer selected from an unsupported guess", relation:"VERIFY", employer:"VERIFY if relevant", comment:"Training note: no card; OHP possibility reported; eligibility search pending.",
    quiz:["Enter a made-up policy number to finish registration","Mark uninsured immediately from the missing card","Continue care and use the approved eligibility search"], answer:2
  }
];

const clues = [
  ["Red-white-blue Medicare card","original-medicare","Check whether an active Advantage plan or other payer also exists, then complete the applicable MSP questions."],
  ["Private card says Medicare Advantage","medicare-advantage","Verify the exact Advantage product and use its medical plan card for the payer record."],
  ["Medicare + Oregon Health ID","dual","Check the Medicare product and MMIS OHP/QMB status separately."],
  ["Oregon Health ID or Trillium","ohp-cco","Use MMIS to see whether today's coverage is Trillium, another CCO, or Open Card."],
  ["Employer or marketplace plan","commercial","Identify the issuer and medical product; verify date of service and other coverage."],
  ["Military or VA card","tfl","Determine whether this is TRICARE For Life, CHAMPVA, or veteran VA care; they have different rules."],
  ["Hurt at work","work-injury","Collect the work-injury facts and verify the carrier/claim before assigning responsibility."],
  ["Car crash","mva","Find the auto claim and other medical plans; determine whether this care relates to the accident."],
  ["No card","unknown","Don't invent a policy number. Use approved eligibility searches and record what remains unknown."]
];

const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
let activeFilter = "All";
const filters = ["All","Medicare","OHP","Combined","Private","Military / VA","Injury / claim","Other"];
const list = document.getElementById("payer-list");
const dialog = document.getElementById("record-dialog");

document.getElementById("clue-list").innerHTML = clues.map(([label], i) => `<button type="button" class="clue" data-clue="${i}" aria-pressed="false">${escapeHTML(label)}</button>`).join("");
document.getElementById("clue-result").innerHTML = `<h3>Start with the card or situation.</h3><p>Then verify today's coverage and payer order before filling the account.</p>`;
document.getElementById("filters").innerHTML = filters.map(f => `<button type="button" class="filter" data-filter="${escapeHTML(f)}" aria-pressed="${f === "All"}">${escapeHTML(f)}</button>`).join("");
document.getElementById("source-list").innerHTML = Object.values(sources).map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(s.name)}<small>${escapeHTML(s.org)} ↗</small></a>`).join("");

function renderCards(){
  const term = document.getElementById("search").value.trim().toLowerCase();
  const shown = cases.filter(c => (activeFilter === "All" || c.group === activeFilter) && [c.title,c.tag,c.gist,c.combos,c.look,c.verify].join(" ").toLowerCase().includes(term));
  document.getElementById("result-count").textContent = `${shown.length} of ${cases.length} types`;
  list.innerHTML = shown.length ? shown.map(c => `<article id="${c.id}" class="payer" tabindex="-1"><p class="payer-tag">${escapeHTML(c.tag)} · ${escapeHTML(c.group)}</p><h3><strong>${escapeHTML(c.title)}</strong></h3><p class="gist">${escapeHTML(c.gist)}</p><p class="hint"><em>Possible combinations:</em> ${escapeHTML(c.combos)}</p><p class="hint"><em>Possible copay / cost:</em> ${escapeHTML(c.cost)}</p><p class="verify">WHERE TO VERIFY: ${escapeHTML(c.verify)}</p><p class="look"><strong>Spot it fast:</strong> ${escapeHTML(c.look)}</p><div class="payer-actions"><button type="button" class="primary-button" data-record="${c.id}">Open filled practice record →</button><a class="source-inline" href="${sources[c.refs[0]].url}" target="_blank" rel="noopener noreferrer">Official source ↗</a></div></article>`).join("") : `<p class="empty">No matching type. Try a shorter card name or choose All.</p>`;
}

function recordRows(c){
  const values = {
    "Primary payer":c.primary,"Secondary / tertiary":c.secondary,"Search Insurance / payer":c.payer,
    "Payer address / phone":common.payerContact,"Policy / member / claim ID":c.member,"Group name / number":c.groupNo,
    "Medicare ID (if separate)":c.mbi,"Coverage effective date":common.effective,
    "Insured name":c.name,"Insured DOB":c.dob,"Insured gender field":common.insuredGender,
    "Relationship to patient":c.relation,"Employer (if applicable)":c.employer,
    "Release Information":common.release,"Assigned Benefits":common.assignment,"Verified":common.verified,
    "Comments":c.comment
  };
  return Object.entries(values).map(([label,value]) => `<tr><th scope="row">${escapeHTML(label)}</th><td class="${/VERIFY|PENDING|UNKNOWN|NOT SET|No payer/.test(value) ? "pending" : ""}" data-answer="${escapeHTML(value)}">${escapeHTML(value)}</td></tr>`).join("");
}

function openRecord(id){
  const c = cases.find(item => item.id === id); if(!c) return;
  document.getElementById("record-title").textContent = c.title;
  document.getElementById("record-body").innerHTML = `<div class="dialog-content"><div class="record-alert"><strong>Training layout, not the live Patient Logic screen.</strong> Field labels and order are based on existing practice notes. The exact screen, payer codes, and required local entries need the screenshot and trainer confirmation. Every identity and ID here is fictional or an official sample.</div><div class="scenario"><strong>At the desk</strong>${escapeHTML(c.scenario)}</div><p class="learning-note"><strong>The decision:</strong> ${escapeHTML(c.nuance)}</p><div class="record-controls"><button type="button" class="mode-button" data-mode="filled" aria-pressed="true">Filled example</button><button type="button" class="mode-button" data-mode="practice" aria-pressed="false">Hide answers to practice</button></div><div class="table-scroll"><table class="record-table"><tbody>${recordRows(c)}</tbody></table></div><fieldset class="practice-question"><legend>Quick check · What would you do first?</legend>${c.quiz.map((q,i)=>`<label><input type="radio" name="quiz" value="${i}">${escapeHTML(q)}</label>`).join("")}<p class="feedback" aria-live="polite"></p></fieldset><p class="record-sources">Sources: ${c.refs.map(k=>`<a href="${sources[k].url}" target="_blank" rel="noopener noreferrer">${escapeHTML(sources[k].org)}</a>`).join(" · ")}</p></div>`;
  dialog.dataset.caseId = id;
  dialog.showModal();
  document.getElementById("close-dialog").focus();
}

document.getElementById("clue-list").addEventListener("click", e => {
  const button = e.target.closest("[data-clue]"); if(!button) return;
  document.querySelectorAll(".clue").forEach(b => b.setAttribute("aria-pressed",String(b === button)));
  const [label,id,tip] = clues[Number(button.dataset.clue)];
  const c = cases.find(item => item.id === id);
  document.getElementById("clue-result").innerHTML = `<h3>${escapeHTML(label)}</h3><p>${escapeHTML(tip)}</p><button type="button" class="text-button" data-jump="${id}">Go to ${escapeHTML(c.title)} →</button>`;
});
document.getElementById("clue-result").addEventListener("click", e => {
  const button = e.target.closest("[data-jump]"); if(!button) return;
  activeFilter = "All";document.querySelectorAll(".filter").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.filter === "All")));
  document.getElementById("search").value = "";renderCards();
  const target = document.getElementById(button.dataset.jump);target.scrollIntoView({behavior:"smooth",block:"center"});target.focus({preventScroll:true});
});
document.getElementById("filters").addEventListener("click", e => {
  const button = e.target.closest("[data-filter]");if(!button)return;
  activeFilter = button.dataset.filter;document.querySelectorAll(".filter").forEach(b=>b.setAttribute("aria-pressed",String(b === button)));renderCards();
});
document.getElementById("search").addEventListener("input",renderCards);
list.addEventListener("click",e=>{const button=e.target.closest("[data-record]");if(button)openRecord(button.dataset.record)});
document.getElementById("close-dialog").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target === dialog)dialog.close()});
dialog.addEventListener("click",e=>{
  const button=e.target.closest("[data-mode]");if(!button)return;
  const hide=button.dataset.mode === "practice";
  dialog.querySelectorAll("[data-mode]").forEach(b=>b.setAttribute("aria-pressed",String(b === button)));
  dialog.querySelectorAll("[data-answer]").forEach(cell=>{cell.textContent=hide?"Your answer…":cell.dataset.answer;cell.classList.toggle("blank",hide)});
});
dialog.addEventListener("change",e=>{
  if(e.target.name !== "quiz")return;
  const c=cases.find(item=>item.id === dialog.dataset.caseId);const feedback=dialog.querySelector(".feedback");
  const correct=Number(e.target.value) === c.answer;
  feedback.textContent=correct?"Yes. Verify the facts before choosing the payer entry.":"Try again. Check what is confirmed versus only reported.";
  feedback.className=`feedback ${correct?"correct":"incorrect"}`;
});
renderCards();
