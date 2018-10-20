import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub628Component} from "./stub628.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub628Component
        }])
    ],
    declarations: [
        Stub628Component
    ]
})
export class Stub628Module {

}
