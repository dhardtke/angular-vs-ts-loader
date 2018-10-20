import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub415Component} from "./stub415.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub415Component
        }])
    ],
    declarations: [
        Stub415Component
    ]
})
export class Stub415Module {

}
