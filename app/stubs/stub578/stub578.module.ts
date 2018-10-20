import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub578Component} from "./stub578.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub578Component
        }])
    ],
    declarations: [
        Stub578Component
    ]
})
export class Stub578Module {

}
