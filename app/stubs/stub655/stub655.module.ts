import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub655Component} from "./stub655.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub655Component
        }])
    ],
    declarations: [
        Stub655Component
    ]
})
export class Stub655Module {

}
