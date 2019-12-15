import React from 'react';

const displayRegulations = () => (
  <div>
    <ol style={{ listStyleType: 'decimal' }}>
      <li>
        Members wishing to run networked programs must first obtain the permission of the committee.
        The committee reserves the right to shut down such programs without notice.
      </li>
      <li>
        Members wishing to make an announcement to the membership are encouraged to use the
        Newsgroup system, but in cases where mailing the membership is considered vital, the
        permission of the committee must be obtained first.
      </li>
      <li>
        Spamming other users is an offense (e.g. mass mailing, system-wide write messages, or
        flooding chat rooms) unless a practical need to do so has been presented to the committee,
        and their permission obtained for such a mass communication.
      </li>
      <li>
        Users are requested to take all reasonable precautions to ensure the security of their
        account, and to comply with the instructions of Redbrick's System Administrators and with
        their guidelines on security.
      </li>
      <li>
        The reprovision of Dublin City University Networking Society Services or Equipment requires
        the approval of the committee.
      </li>
      <li>
        Certain file types are banned by our web server and users should not try to circumvent this
        rule. For more information on the restricted file types and getting access, contact
      </li>
    </ol>
    <p>
      The following regulations are additional to the Society's own rules... -{' '}
      <a href="http://www.dcu.ie/csd/regulations.html">
        Code of Conduct for the use of Computing Resources in Dublin City University
      </a>{' '}
      - <a href="http://www.heanet.ie/about/aup">HEAnet Acceptable Usage Policy</a>
    </p>
    <h2 id="reasoning">Reasoning</h2>
    <ul>
      <li>
        These regulations are for the protection of the system and the society. We have a small but
        dedicated Admin team.
      </li>
      <li>
        Regulation 1, about networked programs, is primarily for security reasons. Networked
        programs are programs which allow non-system users to interact with them, say via TCP/IP.
        There is an inherent security risk here.
      </li>
      <li>Regulations 2 and 3 are self-explanatory, spam is not on!!</li>
      <li>Regulation 4 should be an obvious assumption for any accounts you hold.</li>
      <li>
        Regulation 5 is simply to safeguard that we can control what services are provided to others
        (similar to regulation 1), only the Admin team can really judge what we can support. Also,
        private members should not be giving &quot;accounts&quot; to others, their account is for
        their own use only.
      </li>
    </ul>
    <h2 id="rules-for-lobby.">Rules For #lobby.</h2>
    <ul>
      <li>
        Users must obtain the permission of the committee before using bots/scripts in #lobby.
      </li>
      <li>Users are not to spam the channel.</li>
      <li>
        Users should not encourage others to enter IRC commands that might be harmful or that
        produce undesirable effects.
      </li>
      <li>
        Users are not to direct people to unsafe or inappropriate links without prior warning of
        their content.
      </li>
      <li>
        Ops are, as a general rule, a committee privilege. While they may be used by others on
        occasion, they are only for administrative/emergency use. Abuse of ops will lead to their
        removal.
      </li>
      <li>
        Offences shall be dealt with by the committee and may lead to banning, repeated offences may
        lead to disuserment.
      </li>
      <li>Ops should endeavour to use common sense when enforcing the rules.</li>
    </ul>
    <h2 id="authorized-bots-in-lobby">Authorized Bots in #lobby</h2>
    <ul>
      <li>butlerx (actually a user but runs a script)</li>
      <li>mincebot (owned by DoC)</li>
      <li>teh (owned by d_fens)</li>
      <li>twit (owned by mickeyd)</li>
    </ul>
    <h2 id="user-agreement">User Agreement</h2>
    <p>By logging into Redbrick you agree to these terms and conditions.</p>
    <ol style={{ listStyleType: 'decimal' }}>
      <li>Redbrick is governed by various regulations, as detailed above</li>
      <li>
        Redbrick take no responsibility for the integrity of user data stored or developed using
        Redbrick. While Redbrick will endeavour to provide a backup service to all users, Redbrick
        cannot ultimately guarantee protection from system failures, user accidents or malicious
        activities by other users. So please don't leave the only copy of your 4th year final
        project on Redbrick! :o) Redbrick offers no guarantee of user privacy. Redbrick
        administrators have the power to search accounts and all user data therein for any material
        that is considered to be illegal (by the regulations we mentioned above) or that pose a
        security threat to other user accounts or even the system as a whole. Redbrick will
        endeavour to make all user accounts secure by default but it is impossible to 'police' all
        user activities, which may include attempts to 'trojan' or subvert other user accounts.
      </li>
      <li>
        Any attempts to undermine or breach the security of Redbrick or any user's account will be
        taken as a serious matter, and will be subject to appropriate punishment as determined by
        the committee. Such punishments will typically amount to a disabling of the user's account
        for a certain period. All other services (events, talks, tutorials) that Redbrick provide to
        members will of course still be available to the user.
      </li>
      <li>
        Redbrick reserve the right to update this agreement at any time in the future. Should this
        be necessary, you will be asked to agree to these terms and conditions again with the new
        agreement replacing previous versions.
      </li>
    </ol>
  </div>
);

export default displayRegulations;
