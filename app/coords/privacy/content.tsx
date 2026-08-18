import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  LegalLead,
  LegalLink,
  LegalList,
  LegalSection,
  LegalTitle,
  LegalUpdated,
} from '../legal-page'

export function PrivacyEn() {
  return (
    <>
      <LegalTitle>Privacy Policy</LegalTitle>
      <LegalUpdated>Last updated: 18 August 2026</LegalUpdated>
      <LegalLead>
        This policy explains what Coords collects, why, and how you can control
        it. Coords is a daily location-guessing game for iOS, operated by Jannik
        Hösch (“I”, “me”, “we”).
      </LegalLead>

      <LegalSection title="Who is responsible">
        <p>
          The data controller under the GDPR is Jannik Hösch, established in
          Stockholm, Sweden. Contact:{' '}
          <LegalLink href={CONTACT_MAILTO}>{CONTACT_EMAIL}</LegalLink>.
        </p>
        <p>
          This policy covers the Coords iOS app and the pages at{' '}
          <LegalLink href="https://jannikhoesch.com/coords">
            jannikhoesch.com/coords
          </LegalLink>
          , including this Privacy Policy and the Terms of Use.
        </p>
      </LegalSection>

      <LegalSection title="Data we collect">
        <p>
          <strong className="font-medium text-neutral-100">Account.</strong> You
          sign in with Apple only. We receive an Apple user identifier and an
          email address. If you use Hide My Email, that address is an Apple
          private relay. We do not offer Google, Facebook, or password sign-in.
        </p>
        <p>
          <strong className="font-medium text-neutral-100">Profile.</strong>{' '}
          Display name, birthday, and an optional profile photo that you
          provide. Birthday is stored with your account to help confirm you meet
          the minimum age. Your display name and optional avatar are shown to
          other people signed in to Coords.
        </p>
        <p>
          <strong className="font-medium text-neutral-100">
            Coords you post.
          </strong>{' '}
          Short dual-camera videos you record in the app, plus the precise GPS
          location at the time you post. Location is the point of the product:
          other players try to guess where the clip was taken.
        </p>
        <p>
          <strong className="font-medium text-neutral-100">Guesses.</strong> Map
          coordinates you submit as guesses, and the calculated distance from
          the real place.
        </p>
        <p>
          <strong className="font-medium text-neutral-100">
            Device permissions.
          </strong>{' '}
          Camera, microphone, and location are used on the device so you can
          record a clip and attach or pick a place. We only store location when
          you post a coord or submit a guess. We do not continuously track your
          location in the background.
        </p>
        <p>
          We do not run third-party advertising or analytics SDKs in the app. We
          do not sell your personal data.
        </p>
      </LegalSection>

      <LegalSection title="How we use it">
        <LegalList
          items={[
            'Create and keep your account.',
            'Run the daily game: show your clip to other players, let them guess, and show results.',
            'Show profiles, names, avatars, and scores to other people using Coords.',
            'Respond if you email us.',
            'Operate, secure, and (where needed) enforce the rules of the service.',
          ]}
        />
      </LegalSection>

      <LegalSection title="Legal bases under GDPR">
        <p>
          We process personal data to perform the contract with you (providing
          the game you signed up for), and on the basis of legitimate interests
          in operating and securing Coords. Precise location and
          camera/microphone data are used because you choose to post or guess —
          the game cannot work without them.
        </p>
      </LegalSection>

      <LegalSection title="Who can see it">
        <p>
          Other people signed in to Coords can see your profile and the coords
          and guesses you share. The game is about figuring out where a clip was
          taken, so location is the point of the product.
        </p>
        <p>
          Coords is not a private friend group today. Anyone with a Coords
          account can see profiles, posts, and guesses that are part of the
          game. Do not post anything you do not want other Coords users to see.
        </p>
      </LegalSection>

      <LegalSection title="Processors and transfers">
        <LegalList
          items={[
            <>
              <strong className="font-medium text-neutral-100">Apple.</strong>{' '}
              Sign in with Apple, App Store distribution, in-app purchases if we
              add them later, and diagnostic or operating-system data Apple may
              collect as part of iOS and the App Store.
            </>,
            <>
              <strong className="font-medium text-neutral-100">Supabase.</strong>{' '}
              Hosts accounts, profiles, videos, and location data on our behalf
              (authentication, database, and file storage).
            </>,
            <>
              <strong className="font-medium text-neutral-100">Vercel.</strong>{' '}
              Hosts these website pages. Hosting may process technical data such
              as IP address, browser type, and pages visited in order to operate
              and protect the site.
            </>,
          ]}
        />
        <p>
          These providers may process data outside your country, including in
          the United States. Where required, international transfers rely on
          adequacy decisions or Standard Contractual Clauses. We do not sell
          your personal data.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <p>
          We keep your account and game content until you delete your account,
          or until we have to remove it (for example if it violates the Terms of
          Use).
        </p>
        <p>
          In the app: <strong className="font-medium text-neutral-100">Settings → Delete Account</strong>.
          That removes your profile, coords (including videos), and guesses from
          our systems. You can also email{' '}
          <LegalLink href={CONTACT_MAILTO}>{CONTACT_EMAIL}</LegalLink>.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          Depending on where you live (including the EU/EEA and the UK), you may
          ask to access, correct, delete, or restrict your data, to object to
          certain processing, or to receive a copy of data you provided. The
          fastest way to delete Coords data is Delete Account in the app. You
          can also email{' '}
          <LegalLink href={CONTACT_MAILTO}>{CONTACT_EMAIL}</LegalLink>.
        </p>
        <p>
          You may lodge a complaint with your local data protection authority.
          If you are in Sweden, that is Integritetsskyddsmyndigheten (IMY).
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          Coords is not directed at children under 13, and we do not knowingly
          collect data from them. If you believe a child under 13 has created an
          account, contact us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this policy. The “Last updated” date at the top will
          change when we do. We encourage you to review it from time to time.
          Where the law requires, we will give additional notice or ask for
          consent.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Jannik Hösch
          <br />
          Stockholm, Sweden
          <br />
          <LegalLink href={CONTACT_MAILTO}>{CONTACT_EMAIL}</LegalLink>
        </p>
      </LegalSection>
    </>
  )
}

export function PrivacyDe() {
  return (
    <>
      <LegalTitle>Datenschutzerklärung</LegalTitle>
      <LegalUpdated>Zuletzt aktualisiert: 18. August 2026</LegalUpdated>
      <LegalLead>
        Diese Erklärung beschreibt, welche Daten Coords erhebt, warum das
        geschieht und welche Kontrolle du darüber hast. Coords ist ein tägliches
        Standort-Ratespiel für iOS, betrieben von Jannik Hösch („ich“, „wir“).
      </LegalLead>

      <LegalSection title="Verantwortlicher">
        <p>
          Verantwortlicher im Sinne der DSGVO ist Jannik Hösch, niedergelassen
          in Stockholm, Schweden. Kontakt:{' '}
          <LegalLink href={CONTACT_MAILTO}>{CONTACT_EMAIL}</LegalLink>.
        </p>
        <p>
          Diese Erklärung gilt für die Coords-iOS-App und die Seiten unter{' '}
          <LegalLink href="https://jannikhoesch.com/coords">
            jannikhoesch.com/coords
          </LegalLink>
          , einschließlich dieser Datenschutzerklärung und der
          Nutzungsbedingungen.
        </p>
      </LegalSection>

      <LegalSection title="Welche Daten wir erheben">
        <p>
          <strong className="font-medium text-neutral-100">Konto.</strong> Die
          Anmeldung erfolgt ausschließlich über Sign in with Apple. Wir erhalten
          eine Apple-Benutzerkennung und eine E-Mail-Adresse. Wenn du Hide My
          Email nutzt, ist das eine Apple-Relay-Adresse. Es gibt keine Anmeldung
          über Google, Facebook oder ein Passwort.
        </p>
        <p>
          <strong className="font-medium text-neutral-100">Profil.</strong>{' '}
          Anzeigename, Geburtstag und optional ein Profilbild, das du
          bereitstellst. Den Geburtstag speichern wir mit deinem Konto, unter
          anderem um das Mindestalter zu prüfen. Anzeigename und optionales
          Avatar sehen andere bei Coords angemeldete Personen.
        </p>
        <p>
          <strong className="font-medium text-neutral-100">
            Coords, die du postest.
          </strong>{' '}
          Kurze Dual-Kamera-Videos, die du in der App aufnimmst, plus den
          genauen GPS-Standort zum Zeitpunkt des Postens. Der Standort ist der
          Kern des Spiels: andere Spieler raten, wo der Clip entstanden ist.
        </p>
        <p>
          <strong className="font-medium text-neutral-100">Tipps.</strong>{' '}
          Kartenkoordinaten, die du als Tipp abgibst, und die berechnete Distanz
          zum tatsächlichen Ort.
        </p>
        <p>
          <strong className="font-medium text-neutral-100">
            Geräteberechtigungen.
          </strong>{' '}
          Kamera, Mikrofon und Standort werden auf dem Gerät genutzt, um einen
          Clip aufzunehmen und einen Ort anzuhängen oder zu wählen. Den
          Standort speichern wir nur, wenn du einen Coord postest oder einen
          Tipp abgibst. Wir tracken deinen Standort nicht fortlaufend im
          Hintergrund.
        </p>
        <p>
          In der App setzen wir keine Werbe- oder Analyse-SDKs Dritter ein. Wir
          verkaufen deine personenbezogenen Daten nicht.
        </p>
      </LegalSection>

      <LegalSection title="Wofür wir die Daten nutzen">
        <LegalList
          items={[
            'Dein Konto anlegen und führen.',
            'Das tägliche Spiel betreiben: deinen Clip anderen zeigen, Tipps ermöglichen und Ergebnisse anzeigen.',
            'Profile, Namen, Avatare und Punkte anderen Coords-Nutzerinnen und -Nutzern zeigen.',
            'Auf E-Mails an uns antworten.',
            'Den Dienst betreiben, absichern und bei Bedarf die Regeln durchsetzen.',
          ]}
        />
      </LegalSection>

      <LegalSection title="Rechtsgrundlagen (DSGVO)">
        <p>
          Wir verarbeiten personenbezogene Daten zur Erfüllung des Vertrags mit
          dir (Bereitstellung des Spiels, für das du dich registriert hast) sowie
          auf Grundlage berechtigter Interessen am Betrieb und der Sicherheit
          von Coords. Genaue Standortdaten sowie Kamera- und Mikrofondaten
          nutzen wir, weil du dich entscheidest zu posten oder zu tippen — ohne
          sie funktioniert das Spiel nicht.
        </p>
      </LegalSection>

      <LegalSection title="Wer die Daten sehen kann">
        <p>
          Andere bei Coords angemeldete Personen können dein Profil sowie die
          Coords und Tipps sehen, die du teilst. Das Spiel besteht darin,
          herauszufinden, wo ein Clip aufgenommen wurde — der Standort ist der
          Sinn des Produkts.
        </p>
        <p>
          Coords ist derzeit kein privater Freundeskreis. Jede Person mit einem
          Coords-Konto kann Profile, Beiträge und Tipps sehen, die Teil des
          Spiels sind. Poste nichts, das andere Coords-Nutzerinnen und -Nutzer
          nicht sehen sollen.
        </p>
      </LegalSection>

      <LegalSection title="Auftragsverarbeiter und Übermittlungen">
        <LegalList
          items={[
            <>
              <strong className="font-medium text-neutral-100">Apple.</strong>{' '}
              Sign in with Apple, Vertrieb über den App Store, künftige
              In-App-Käufe, falls wir sie anbieten, sowie Diagnose- oder
              Systemdaten, die Apple im Rahmen von iOS und dem App Store erheben
              kann.
            </>,
            <>
              <strong className="font-medium text-neutral-100">Supabase.</strong>{' '}
              Hostet Konten, Profile, Videos und Standortdaten in unserem
              Auftrag (Authentifizierung, Datenbank und Dateispeicher).
            </>,
            <>
              <strong className="font-medium text-neutral-100">Vercel.</strong>{' '}
              Hostet diese Website. Beim Hosting können technische Daten wie
              IP-Adresse, Browsertyp und besuchte Seiten verarbeitet werden, um
              die Seite zu betreiben und zu schützen.
            </>,
          ]}
        />
        <p>
          Diese Anbieter können Daten außerhalb deines Landes verarbeiten,
          einschließlich in den Vereinigten Staaten. Soweit erforderlich, stützen
          sich internationale Übermittlungen auf Angemessenheitsbeschlüsse oder
          Standardvertragsklauseln. Wir verkaufen deine personenbezogenen Daten
          nicht.
        </p>
      </LegalSection>

      <LegalSection title="Speicherdauer">
        <p>
          Wir speichern dein Konto und deine Spielinhalte, bis du dein Konto
          löschst oder wir sie entfernen müssen (zum Beispiel bei einem Verstoß
          gegen die Nutzungsbedingungen).
        </p>
        <p>
          In der App:{' '}
          <strong className="font-medium text-neutral-100">
            Settings → Delete Account
          </strong>
          . Damit werden Profil, Coords (einschließlich Videos) und Tipps aus
          unseren Systemen entfernt. Du kannst auch an{' '}
          <LegalLink href={CONTACT_MAILTO}>{CONTACT_EMAIL}</LegalLink> schreiben.
        </p>
      </LegalSection>

      <LegalSection title="Deine Rechte">
        <p>
          Je nach Wohnort (einschließlich EU/EWR und Vereinigtes Königreich)
          kannst du Auskunft, Berichtigung, Löschung oder Einschränkung
          verlangen, der Verarbeitung widersprechen oder eine Kopie der von dir
          bereitgestellten Daten erhalten. Der schnellste Weg zur Löschung ist
          Delete Account in der App. Du kannst auch an{' '}
          <LegalLink href={CONTACT_MAILTO}>{CONTACT_EMAIL}</LegalLink> schreiben.
        </p>
        <p>
          Du kannst dich bei einer Datenschutzaufsicht beschweren. In Schweden
          ist das die Integritetsskyddsmyndigheten (IMY); ansonsten die Behörde
          deines Wohnsitzlandes.
        </p>
      </LegalSection>

      <LegalSection title="Kinder">
        <p>
          Coords richtet sich nicht an Kinder unter 13 Jahren, und wir erheben
          wissentlich keine Daten von ihnen. Wenn du glaubst, dass ein Kind unter
          13 Jahren ein Konto angelegt hat, kontaktiere uns — wir löschen es.
        </p>
      </LegalSection>

      <LegalSection title="Änderungen">
        <p>
          Wir können diese Erklärung aktualisieren. Das Datum „Zuletzt
          aktualisiert“ oben ändert sich dann. Wir empfehlen, sie gelegentlich
          zu lesen. Soweit das Recht es verlangt, geben wir einen zusätzlichen
          Hinweis oder holen eine Einwilligung ein.
        </p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          Jannik Hösch
          <br />
          Stockholm, Schweden
          <br />
          <LegalLink href={CONTACT_MAILTO}>{CONTACT_EMAIL}</LegalLink>
        </p>
      </LegalSection>
    </>
  )
}
