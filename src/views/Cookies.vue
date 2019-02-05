<template>
    <div class="cookies">
        <div class="outer-block">
            <div class="header-text">
                <b>Cookies policy for AFRIKALOAN LIMITED</b>
            </div>
            <div class="date-text">Effective Date: 31/10/2018</div>
            <div class="text">
                <b>Summary</b>
                <br><br>
                AFRIKALOAN LIMITED (<strong>“AFRIKALOAN” or We</strong>) is committed to protecting and respecting your privacy.
                This Cookies Policy explains what is cookies and why we collect it. You should read this Policy in its entirety.
                Certain sections may apply differently to residents of different jurisdictions. By downloading Afrikaloan, you
                consent to the following:
                <br><br>
                <b>What is Cookie?</b>
                <br>
                A cookie is a small text file which is stored on a user’s computer. It can contain information about the user
                and the way they interact with the internet and can help make a user’s online experience more efficient. We use
                encrypted information gathered from them to help improve your experience of the site. For example, they help us
                to identify and resolve errors, or to determine relevant information to show you when you’re browsing.
                <br><br>
                <b>How we using cookies?</b>
                <br>
                We may use cookies and similiar technologies in our Website, App, Our Service Sites and other our web services.
                <br><br>
                We may use website cookies to distinguish you from other users of the App, App Site, or Service Sites. This
                helps us to provide you with a good experience when you use the App or browse any of the Service Sites and also
                allows us to improve the App and Our Service Sites.
                <br><br>
                Unique application numbers. When you install or uninstall a Service containing a unique application number or
                when such a Service searches for automatic updates, that number and information about your installation, for
                example, the type of operating system, may be sent to us.
                <br><br>
                We and our third-party service providers, including our marketing partners and analytics providers, may use
                website cookies to distinguish you from other users of the App, App Site or Service Site. This helps us to
                provide you with a good experience when you use the App or browse any of the sites and also allows us to improve
                the App and Our Sites.
                <br><br>
                As is true of most websites, we gather certain information automatically and store it in log files. This
                information may include your internet protocol (IP) address, browser type
                <br><br>
                We use Google Analytics to collect information about how people use this site. We do this to make sure it's
                meeting its users' needs and to understand how we could do it better.
                <br><br>
                Google Analytics stores information about what pages you visit, how long you are on the site, how you got here
                and what you click on. We do not collect or store your personal information (e.g. your name or address) so this
                information cannot be used to identify who you are. We do not allow Google to use or share our analytics data.
                <br><br>
                Cookies are useful for things such as remembering your preferences and improving your online experience. Cookies
                help us understand what customers like to look at on our site. This information does not allow us to identify
                any particular customer, but helps us to understand our customers' needs and improve our service to you.
                <br><br>
                All data collected by Afrikaloan’s cookies is anonymous and will never contain personal data - your name,
                address, telephone number, email address or payment details.
                <br><br>
                You can delete your cookies at any time in your browser settings.
                <!--
                Our website uses cookies

                Afrikaloan.co.ke uses cookies to improve your user experience. By using our website you consent to our cookies
                in accordance with our Cookie Policy.
                -->
            </div>
            <div class="close" onclick="history.back();">
                <div class="ico"></div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "cookies",
        methods: {
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            }
        }
    };

</script>

<style lang="scss" src="../scss/_docs.scss"></style>