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

const APPLE_EULA =
  'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'

export function TermsEn() {
  return (
    <>
      <LegalTitle>Terms of Use</LegalTitle>
      <LegalUpdated>Last updated: 18 August 2026</LegalUpdated>
      <LegalLead>
        These Terms of Use (“Terms”) govern your use of Coords, a daily
        location-guessing game for iOS, operated by Jannik Hösch. In the app,
        Settings labels this document Terms of Use; the welcome screen may say
        Terms of Service. It is the same agreement. By creating an account or
        using Coords, you agree to these Terms. If you do not agree, do not use
        Coords.
      </LegalLead>

      <LegalSection title="Apple’s EULA">
        <p>
          Your download and use of the iOS app is also subject to Apple’s{' '}
          <LegalLink href={APPLE_EULA}>
            Licensed Application End User License Agreement
          </LegalLink>{' '}
          (or any custom EULA Apple shows you). If these Terms and Apple’s EULA
          conflict on your licensed use of the app on an Apple device, Apple’s
          EULA controls that conflict. These Terms still govern your
          relationship with Jannik Hösch as the developer of Coords.
        </p>
      </LegalSection>

      <LegalSection title="The app">
        <p>
          Coords lets you post a short video with a hidden location so other
          signed-in players can guess where it was taken. Features may change
          over time. The app is currently free. Any future paid features or
          in-app purchases would be billed through Apple, under Apple’s payment
          terms. We do not process app-store payments ourselves. Apple’s terms
          apply to those transactions, including billing and refunds.
        </p>
      </LegalSection>

      <LegalSection title="Accounts">
        <p>
          You sign in with Apple. You must be at least 13, and old enough to
          agree to these Terms in your country. You are responsible for the
          Apple ID you use.
        </p>
        <p>
          You can delete your account at any time in{' '}
          <strong className="font-medium text-neutral-100">
            Settings → Delete Account
          </strong>
          .
        </p>
      </LegalSection>

      <LegalSection title="Your content">
        <p>
          You keep the rights you have in the videos, photos, names, and other
          content you post. You grant us a non-exclusive, worldwide license to
          host, store, reproduce, display, and share that content inside Coords
          so the game can work (for example, showing your clip, profile, and
          results to other signed-in players). This license ends when the
          content is deleted from our systems, except for residual copies that
          are then deleted in the ordinary course of backups.
        </p>
        <p>
          You must only post content you have the right to share. Do not post
          anything illegal, sexual involving minors, harassing, or that reveals
          someone else’s private information without permission. We may remove
          content or accounts that break these rules.
        </p>
        <p>
          There is a zero-tolerance policy for objectionable content or abusive
          users. You may report any post or block any user directly in the app
          (via the menu on the post or profile). We review reports and, where
          these Terms are violated, remove the content or account within 24
          hours.
        </p>
      </LegalSection>

      <LegalSection title="Location and visibility">
        <p>
          When you post a coord, other signed-in Coords users are meant to see
          the video and guess the place. Guesses you submit are also visible as
          part of the game.
        </p>
        <p>
          Coords is not a private friend-only product today. Anyone with a
          Coords account can see profiles, posts, and guesses that are part of
          the game. Do not post from a location you are not comfortable sharing.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <LegalList
          items={[
            'Do not try to access other people’s accounts or our systems without permission.',
            'Do not scrape, overload, or reverse engineer the service except as allowed by law.',
            'Do not use Coords to spam, impersonate others, or break the law.',
          ]}
        />
      </LegalSection>

      <LegalSection title="Privacy">
        <p>
          How we handle personal data is described in the{' '}
          <LegalLink href="/coords/privacy">Privacy Policy</LegalLink>.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer">
        <p>
          Coords is provided “as is”. We do not promise that it will always be
          available, accurate, or error-free. To the fullest extent allowed by
          law, we disclaim implied warranties. We are not liable for guesses
          that are wrong, content posted by other users, or loss of data beyond
          what applicable law requires.
        </p>
        <p>
          If you are a consumer in the EU/EEA or the UK, your mandatory
          statutory rights are not affected. Nothing in these Terms limits
          liability that cannot be limited under applicable law, including
          liability for death or personal injury caused by negligence, or for
          fraud.
        </p>
      </LegalSection>

      <LegalSection title="Termination">
        <p>
          You may stop using Coords and delete your account at any time. We may
          suspend or delete an account that violates these Terms or that we can
          no longer support.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update these Terms. The “Last updated” date will change when we
          do. If you do not agree with the new Terms, stop using Coords and
          delete your account. If you keep using Coords after a change, you
          accept the new Terms.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These Terms are governed by the laws of Sweden, excluding
          conflict-of-law rules. If you are a consumer in the EU/EEA or the UK,
          you also have the protection of the mandatory consumer laws of your
          country of residence, and you may bring proceedings in the courts of
          that country.
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

export function TermsDe() {
  return (
    <>
      <LegalTitle>Nutzungsbedingungen</LegalTitle>
      <LegalUpdated>Zuletzt aktualisiert: 18. August 2026</LegalUpdated>
      <LegalLead>
        Diese Nutzungsbedingungen („Bedingungen“) gelten für Coords, ein
        tägliches Standort-Ratespiel für iOS, betrieben von Jannik Hösch. In der
        App heißt dieses Dokument in den Einstellungen Terms of Use; auf dem
        Willkommensbildschirm kann Terms of Service stehen. Es ist dieselbe
        Vereinbarung. Wenn du ein Konto erstellst oder Coords nutzt, stimmst du
        diesen Bedingungen zu. Wenn du nicht zustimmst, nutze Coords nicht.
      </LegalLead>

      <LegalSection title="Apples EULA">
        <p>
          Download und Nutzung der iOS-App unterliegen außerdem Apples{' '}
          <LegalLink href={APPLE_EULA}>
            Licensed Application End User License Agreement
          </LegalLink>{' '}
          (oder einer anderen EULA, die Apple anzeigt). Widersprechen sich diese
          Bedingungen und Apples EULA hinsichtlich der lizenzierten Nutzung der
          App auf einem Apple-Gerät, gilt für diesen Widerspruch Apples EULA.
          Diese Bedingungen regeln weiterhin dein Verhältnis zu Jannik Hösch als
          Entwickler von Coords.
        </p>
      </LegalSection>

      <LegalSection title="Die App">
        <p>
          Mit Coords postest du ein kurzes Video mit verstecktem Standort, damit
          andere angemeldete Spieler raten können, wo es aufgenommen wurde.
          Funktionen können sich ändern. Die App ist derzeit kostenlos. Künftige
          bezahlte Funktionen oder In-App-Käufe würden über Apple abgerechnet,
          nach Apples Zahlungsbedingungen. Wir verarbeiten App-Store-Zahlungen
          nicht selbst. Für diese Transaktionen gelten Apples Bedingungen,
          einschließlich Abrechnung und Erstattungen.
        </p>
      </LegalSection>

      <LegalSection title="Konten">
        <p>
          Du meldest dich mit Apple an. Du musst mindestens 13 Jahre alt sein
          und in deinem Land alt genug, um diesen Bedingungen zuzustimmen. Du
          bist für die verwendete Apple-ID verantwortlich.
        </p>
        <p>
          Du kannst dein Konto jederzeit unter{' '}
          <strong className="font-medium text-neutral-100">
            Settings → Delete Account
          </strong>{' '}
          löschen.
        </p>
      </LegalSection>

      <LegalSection title="Deine Inhalte">
        <p>
          Die Rechte an Videos, Fotos, Namen und anderen Inhalten, die du
          postest, bleiben bei dir. Du räumst uns eine nicht-exklusive, weltweite
          Lizenz ein, diese Inhalte in Coords zu hosten, zu speichern, zu
          vervielfältigen, anzuzeigen und zu teilen, damit das Spiel
          funktioniert (zum Beispiel das Zeigen deines Clips, Profils und der
          Ergebnisse an andere angemeldete Spieler). Die Lizenz endet, wenn die
          Inhalte aus unseren Systemen gelöscht sind, ausgenommen Restkopien, die
          im normalen Ablauf von Backups danach gelöscht werden.
        </p>
        <p>
          Du darfst nur Inhalte posten, die du teilen darfst. Poste nichts
          Illegales, nichts Sexuelles mit Bezug zu Minderjährigen, nichts
          Belästigendes und keine privaten Informationen anderer ohne Erlaubnis.
          Wir können Inhalte oder Konten entfernen, die gegen diese Regeln
          verstoßen.
        </p>
        <p>
          Für anstößige Inhalte und missbräuchliches Verhalten gilt
          Null-Toleranz. Du kannst jeden Beitrag melden oder jede Person direkt
          in der App blockieren (über das Menü am Beitrag oder Profil). Wir
          prüfen Meldungen und entfernen bei einem Verstoß gegen diese
          Bedingungen den Inhalt oder das Konto innerhalb von 24 Stunden.
        </p>
      </LegalSection>

      <LegalSection title="Standort und Sichtbarkeit">
        <p>
          Wenn du einen Coord postest, sollen andere angemeldete Coords-Nutzer
          das Video sehen und den Ort raten. Auch deine Tipps sind als Teil des
          Spiels sichtbar.
        </p>
        <p>
          Coords ist derzeit kein privates Freundesprodukt. Jede Person mit einem
          Coords-Konto kann Profile, Beiträge und Tipps sehen, die Teil des
          Spiels sind. Poste nicht von einem Ort, den du nicht teilen möchtest.
        </p>
      </LegalSection>

      <LegalSection title="Zulässige Nutzung">
        <LegalList
          items={[
            'Greife nicht ohne Erlaubnis auf fremde Konten oder unsere Systeme zu.',
            'Scrape, überlaste oder reverse-engineere den Dienst nicht, soweit das Gesetz es nicht erlaubt.',
            'Nutze Coords nicht zum Spammen, zur Vortäuschung falscher Identitäten oder für Straftaten.',
          ]}
        />
      </LegalSection>

      <LegalSection title="Datenschutz">
        <p>
          Wie wir personenbezogene Daten behandeln, steht in der{' '}
          <LegalLink href="/coords/privacy">Datenschutzerklärung</LegalLink>.
        </p>
      </LegalSection>

      <LegalSection title="Haftungsausschluss">
        <p>
          Coords wird „wie besehen“ bereitgestellt. Wir versprechen nicht, dass
          der Dienst immer verfügbar, genau oder fehlerfrei ist. Soweit das
          Recht es zulässt, schließen wir stillschweigende Gewährleistungen aus.
          Wir haften nicht für falsche Tipps, Inhalte anderer Nutzer oder
          Datenverlust über das hinaus, was geltendes Recht verlangt.
        </p>
        <p>
          Bist du Verbraucherin oder Verbraucher in der EU/im EWR oder im
          Vereinigten Königreich, bleiben deine zwingenden gesetzlichen Rechte
          unberührt. Nichts in diesen Bedingungen beschränkt eine Haftung, die
          nach geltendem Recht nicht beschränkt werden kann, einschließlich der
          Haftung für Tod oder Körperverletzung durch Fahrlässigkeit oder für
          Betrug.
        </p>
      </LegalSection>

      <LegalSection title="Beendigung">
        <p>
          Du kannst Coords jederzeit nicht mehr nutzen und dein Konto löschen.
          Wir können ein Konto sperren oder löschen, das gegen diese Bedingungen
          verstößt oder das wir nicht mehr betreiben können.
        </p>
      </LegalSection>

      <LegalSection title="Änderungen">
        <p>
          Wir können diese Bedingungen aktualisieren. Das Datum „Zuletzt
          aktualisiert“ ändert sich dann. Wenn du mit den neuen Bedingungen
          nicht einverstanden bist, nutze Coords nicht weiter und lösche dein
          Konto. Wenn du Coords nach einer Änderung weiter nutzt, akzeptierst du
          die neuen Bedingungen.
        </p>
      </LegalSection>

      <LegalSection title="Anwendbares Recht">
        <p>
          Es gilt schwedisches Recht unter Ausschluss der
          Kollisionsnormen. Bist du Verbraucherin oder Verbraucher in der EU/im
          EWR oder im Vereinigten Königreich, bleiben die zwingenden
          Verbraucherschutzvorschriften deines Wohnsitzlandes unberührt. Du
          kannst Rechte vor den Gerichten dieses Landes geltend machen.
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
